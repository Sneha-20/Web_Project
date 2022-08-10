import express from "express";
const app = express();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function calculateTax(quoteItem : any,prisma : any){
  let productIdList = quoteItem.map((x : any) => {return x.productId})
  let gstRateObj : any = {}
  let totalBeforeTax = 0;
  let totalAfterTax = 0;
  let totalGST = 0;
 
  let productRate = await prisma.Product.findMany({
    where : {
      id : {in : productIdList}
    },
    include : {
      taxrate : true
    }
  })
 // console.log(productRate);
  for(let rate of productRate){
    gstRateObj[rate.id] = rate.taxrate;
  }
  //console.log(gstRateObj);
for(let item of quoteItem){
  item.amountBeforeTax = item.quantity * item.rate;
  item.gstAmount =  item.amountBeforeTax * (gstRateObj[item.productId].rate/100);
  item.amountAfterTax = item.amountBeforeTax + item.gstAmount;
  totalBeforeTax +=  item.amountBeforeTax;
  totalAfterTax += item.amountAfterTax;
  totalGST += item.gstAmount;
}
  return {totalBeforeTax,totalAfterTax,totalGST};
}

function checkApproval(quoteDetail : any){
  let status = 2;
  for(let item of quoteDetail){
    for(let i in item){
     if(item[i] == 1){
      status = 1;
     }
     if(item[i] == 3){
      status = 3;
      return 3;
     }
    }
  }
  return status;
}

async function getQuoteApprovalStatus(id : any,prisma : any) {
  
  let quoteDetail = await prisma.quoteDetail.findMany({
    where : {
      quoteId : id
    },
    select : {
      quoteApprovalStatusL1Id : true,
      quoteApprovalStatusL2Id : true,
      quoteApprovalStatusL3Id : true,
      quoteApprovalStatusL4Id : true,
      quoteApprovalStatusL5Id : true,     
    }
  });
 console.log('quoteDetail',quoteDetail)
let status = checkApproval(quoteDetail);
console.log('status',status)

let item = await prisma.quote.update({
  data: {
   status
  },
where: { id: id }
});
//console.log(item)

}

let create = async (req: any, res: any, next: any) => {
  interface QuoteNo {
    'MAX(quoteno)': number;
  }
  var maxQuoteNoAvailable: Array<QuoteNo> = await prisma.$queryRaw`SELECT MAX(quoteno) FROM Quote`;

  let {
    quoteno,
    quotedate,
    ledgerId,
    termsAndConditionId,
    saleTypeId,
    quoteItem,
  } = req.body;
  let result: any = {};
  quoteno =maxQuoteNoAvailable[0]['MAX(quoteno)'] + 1
  try {
    if (quoteItem.length == 0) {
      throw new Error("When creating a Quote, Quote Detail cannot be null");
    }
    
    let {totalBeforeTax,totalGST,totalAfterTax} = await calculateTax(quoteItem,prisma);


    let recordCreate = await prisma.quote.create({
      data: {
        quoteno,
        quotedate,
        ledgerId,
        termsAndConditionId,
        saleTypeId,
        totalBeforeTax,
        totalGST,
        totalAfterTax,  
        quoteItem: {
          create: quoteItem,
        },
      },
    });
    result.status = "success";
    result.id = recordCreate.id;
    result.msg = "Record Saved Successfully";
  } catch (error: any) {
    console.log(error)
    result.status = error;
    next(error);
    return;
  }
  res.json(result);
};

let duplicate = async (req: any, res: any, next: any) => {
  interface VersionNo {
    'MAX(versionno)': number;
  }

  let {
    quoteno,
    quotedate,
    ledgerId,
    termsAndConditionId,
    saleTypeId,
    quoteItem,
  } = req.body;
  let result: any = {};
  var maxVersionNoAvailable: Array<VersionNo> = await prisma.$queryRaw`SELECT MAX(versionno) FROM Quote WHERE quoteno = {quoteno}`;
  console.log("zzzzzzzz", maxVersionNoAvailable)
  //  quoteno =maxQuoteNoAvailable[0]['MAX(quoteno)'] + 1
  try {
    if (quoteItem.length == 0) {
      throw new Error("When creating a Quote, Quote Detail cannot be null");
    }
    let recordCreate = await prisma.quote.create({
      data: {
        quoteno,
        quotedate,
        ledgerId,
        termsAndConditionId,
        saleTypeId,
        quoteItem: {
          create: quoteItem,
        },
      },
    });
    result.status = "success";
    result.id = recordCreate.id;
    result.msg = "Record Saved Successfully";
  } catch (error: any) {
    result.status = error;
    console.log(error);
    next(error);
    return;
  }
  res.json(result);
};

const editOne = async (req: any, res: any, next: any) => {
  let {
    id,
    quoteno,
    quotedate,
    ledgerId,
    termsAndConditionId,
    saleTypeId,
    quoteItem,
  } = req.body;

 
  let result: any = {};
  try {

    if(!id){
      throw new Error("Cannot update as the quote id is missing");
    }
   
  let data = await prisma.$transaction(async (prisma) => {

    let {totalBeforeTax,totalGST,totalAfterTax} = await calculateTax(quoteItem,prisma);
   
   console.log(quoteItem)
    await prisma.quote.update({
      data: {
        totalBeforeTax,
        totalGST,
        totalAfterTax,  
        quoteno,
        quotedate,
        ledgerId,
        termsAndConditionId,
        saleTypeId
      },
    where: { id: Number(id) }
    });

    for(let item of quoteItem){
      console.log(item)
      console.log(item.id)
         console.log(id)
      item.quoteId = Number(id);
      if(item.id){
     await prisma.quoteDetail.update({
        data : item,
        where : {
          id : item.id
        }
      }) 
      }else{
        await prisma.quoteDetail.create({
          data : item,
        }) 
      }
    }




  });
  console.log(quoteItem.quoteDetail)
  await getQuoteApprovalStatus(Number(id),prisma);

result.status = "success";
result.data = data;
}catch(error: any){
  result.status = error;
  next(error)
  return;
}
res.json(result)
};



let getAll = async (req: any, res: any, next :any) => {
  let result: any = {};
  try{
    const data = await prisma.quote.findMany({
      include : {
          quoteItem : {
              include : {
                  product : {
                      include : {
                          unit : true,
                          taxrate : true,
                      }
                  },
                  quoteApprovalStatusL1: true,
                  quoteApprovalStatusL2: true,
                  quoteApprovalStatusL3: true,
                  quoteApprovalStatusL4: true,
                  quoteApprovalStatusL5: true,
              }
          },
          ledger: true,
          termsAndCondition: true,
          saleType: true,
      }
  });

  result.status = "success";
  result.data = data;
  }catch(error: any){
    result.status = error;
    next(error)
    return;
  }
  res.json(result)
}

let getOne = async (req: any, res: any, next :any) => {
  const { id } = req.params
  let result: any = {};
    try{
    const data = await prisma.quote.findUnique({
        include : {
          quoteItem : {
              include : {
                  product : {
                      include : {
                          unit : true,
                          taxrate : true,
                      }
                  },
                  quoteApprovalStatusL1: true,
                  quoteApprovalStatusL2: true,
                  quoteApprovalStatusL3: true,
                  quoteApprovalStatusL4: true,
                  quoteApprovalStatusL5: true,
              }
          },
          ledger: true,
          termsAndCondition: true,
          saleType: true,
      },
      where: { id: Number(id) || undefined },
  });
  result.status = "success";
  result.data = data;
  result.data.total = 0;
  result.data.quoteItem.totals = 0;
  console.log("len:", result.data.quoteItem.length)
  let Query = `SELECT * FROM QuoteDetail`;
  var totalAmount = await prisma.
    $queryRaw`SELECT 
                q.id,
                quoteno,
                versionno

                FROM Quote q
                  INNER JOIN QuoteDetail qd
                    ON q.id=1 
                
              `;
  console.log("amt:", totalAmount)

  if(!data){
    result.message = "ID does not Exists";
  }
}catch(error: any){
    result.status = error;
    next(error)
    return;
  }
  res.json(result)
}

let deleteOneQuoteProduct = async (req: any, res: any, next :any) => {
  const { id } = req.params
  let result: any = {};
  try{
      const data = await prisma.quoteDetail.delete({
        where: {
          id: Number(id),
        },
        select : {
          quoteId : true
        }
      })
    if(!data){
      throw new Error("There is no active Quote");
    }

    getQuoteApprovalStatus(Number(data.quoteId),prisma);

    result.status = "success";
    result.data = data;
  }catch(error: any){
    result.status = error;
    next(error)
    return;
  }
    res.json(result)
}


// let deleteOne = async (req: any, res: any, next :any) => {
//   const { id } = req.params
//   let result: any = {};
//   try{
//       // const data = await prisma.quote.delete({
//       //   where: {
//       //     id: Number(id),
//       //   },
//       // })

//       const data = await prisma.quote.delete({
//         include : {
//           quoteItem : {
//           include : {
//             product : true
//           }
//           }
//         },
//         where: { id: Number(id) || undefined },
//     });
    
//     if(!data){
//       throw new Error("There is no active Quote");
//     }
//     result.status = "success";
//     result.data = data;
//   }catch(error: any){
//     result.status = error;
//     next(error)
//     return;
//   }
//     res.json(result)
// }

module.exports = {
    create,
    duplicate,
    getAll, 
    getOne,
    editOne,
    deleteOneQuoteProduct
//    deleteOne,
  };
  

//Quote create json
/*
  {
    "quoteno": "1",
    "versionno": 1,
    "quotedate": "2022-07-18T08:46:53.000Z",
    "ledgerId": 4,
    "termsAndConditionId": 1,
    "saleTypeId": 1,
    "quoteItem": [
      {
        "quantity": "10",
        "rate": "12500",
        "productId": 1,
        "quoteApprovalStatusL1Id": 1,
        "quoteApprovalStatusL2Id": 1,
        "quoteApprovalStatusL3Id": 1,
        "quoteApprovalStatusL4Id": 1,
        "quoteApprovalStatusL5Id": 1
      },
      {
        "quantity": "5",
        "rate": "10500",
        "productId": 2,
        "quoteApprovalStatusL1Id": 1,
        "quoteApprovalStatusL2Id": 1,
        "quoteApprovalStatusL3Id": 1,
        "quoteApprovalStatusL4Id": 1,
        "quoteApprovalStatusL5Id": 1
      }
    ]
}
*/