import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const role1 = await prisma.role.upsert({
    where: { id: 1 },     update: {},     create: { name: 'Level 1', level: 1},  })

  const role2 = await prisma.role.upsert({
    where: { id: 2 },     update: {},     create: { name: 'Level 2', level: 2},  })

  const role3 = await prisma.role.upsert({
    where: { id: 3 },     update: {},     create: { name: 'Level 3', level: 3},  })

  const role4 = await prisma.role.upsert({
    where: { id: 4 },     update: {},     create: { name: 'Level 4', level: 4},  })

  const role5 = await prisma.role.upsert({
    where: { id: 5 },     update: {},     create: { name: 'Level 5', level: 5},  })

  const user1 = await prisma.user.upsert({
    where: { id: 1 },     update: {},     create: { name: 'User 1', username: 'user1', password: "user1", roleId: 1},  })

  const user2 = await prisma.user.upsert({
    where: { id: 2 },     update: {},     create: { name: 'User 2', username: 'user2', password: "user2", roleId: 2},  })

  const user3 = await prisma.user.upsert({
    where: { id: 3 },     update: {},     create: { name: 'User 3', username: 'user3', password: "user3", roleId: 3},  })

  const user4 = await prisma.user.upsert({
    where: { id: 4 },     update: {},     create: { name: 'User 4', username: 'user4', password: "user4", roleId: 4},  })

  const user5 = await prisma.user.upsert({
    where: { id: 5 },     update: {},     create: { name: 'User 5', username: 'user5', password: "user5", roleId: 5},  })

  const qas11 = await prisma.quoteAprovalStatusL1.upsert({
    where: { name: 'Pending' },     update: {},     create: { name: 'Pending', },  })

  const qas12 = await prisma.quoteAprovalStatusL1.upsert({
    where: { name: 'Approved' },     update: {},     create: { name: 'Approved', },  })

  const qas13 = await prisma.quoteAprovalStatusL1.upsert({
    where: { name: 'Rejected' },     update: {},     create: { name: 'Rejected', },  })

  const qas21 = await prisma.quoteAprovalStatusL2.upsert({
    where: { name: 'Pending' },     update: {},     create: { name: 'Pending', },  })

  const qas22 = await prisma.quoteAprovalStatusL2.upsert({
    where: { name: 'Approved' },     update: {},     create: { name: 'Approved', },  })

  const qas23 = await prisma.quoteAprovalStatusL2.upsert({
    where: { name: 'Rejected' },     update: {},     create: { name: 'Rejected', },  })

  const qas31 = await prisma.quoteAprovalStatusL3.upsert({
    where: { name: 'Pending' },     update: {},     create: { name: 'Pending', },  })

  const qas32 = await prisma.quoteAprovalStatusL3.upsert({
    where: { name: 'Approved' },     update: {},     create: { name: 'Approved', },  })

  const qas33 = await prisma.quoteAprovalStatusL3.upsert({
    where: { name: 'Rejected' },     update: {},     create: { name: 'Rejected', },  })

  const qas41 = await prisma.quoteAprovalStatusL4.upsert({
    where: { name: 'Pending' },     update: {},     create: { name: 'Pending', },  })

  const qas42 = await prisma.quoteAprovalStatusL4.upsert({
    where: { name: 'Approved' },     update: {},     create: { name: 'Approved', },  })

  const qas43 = await prisma.quoteAprovalStatusL4.upsert({
    where: { name: 'Rejected' },     update: {},     create: { name: 'Rejected', },  })

  const qas51 = await prisma.quoteAprovalStatusL5.upsert({
    where: { name: 'Pending' },     update: {},     create: { name: 'Pending', },  })

  const qas52 = await prisma.quoteAprovalStatusL5.upsert({
    where: { name: 'Approved' },     update: {},     create: { name: 'Approved', },  })

  const qas53 = await prisma.quoteAprovalStatusL5.upsert({
    where: { name: 'Rejected' },     update: {},     create: { name: 'Rejected', },  })

  const led1 = await prisma.ledger.upsert({
    where: { name: 'XYZ Ltd' },     update: {},     create: { name: 'XYZ Ltd', },  })
    
  const led2 = await prisma.ledger.upsert({
    where: { name: 'ABC Ltd' },     update: {},     create: { name: 'ABC Ltd', },  })
    
  const led3 = await prisma.ledger.upsert({
    where: { name: 'James Corporation' },     update: {},     create: { name: 'James Corporation', },  })
    
  const led4 = await prisma.ledger.upsert({
    where: { name: 'ABC & Co' },     update: {},     create: { name: 'ABC & Co', },  })
    
  const led5 = await prisma.ledger.upsert({
    where: { name: 'Mohan Bagan' },     update: {},     create: { name: 'Mohan Bagan', },  })
    
  const st1 = await prisma.saleType.upsert({
    where: { name: 'InterState/Local GST' },     update: {},     create: { name: 'InterState/Local GST', },  })
    
  const st2 = await prisma.saleType.upsert({
    where: { name: 'IntraState GST' },     update: {},     create: { name: 'IntraState GST', },  })

  const tc1 = await prisma.termsAndCondition.upsert({
    where: { name: 'Terms and Condition 1' },     update: {},     create: { name: 'Terms and Condition 1', },  })

  const tc2 = await prisma.termsAndCondition.upsert({
    where: { name: 'Terms and Condition 2' },     update: {},     create: { name: 'Terms and Condition 2', },  })

  const tc3 = await prisma.termsAndCondition.upsert({
    where: { name: 'Terms and Condition 3' },     update: {},     create: { name: 'Terms and Condition 3', },  })

  const tc4 = await prisma.termsAndCondition.upsert({
    where: { name: 'Terms and Condition 4' },     update: {},     create: { name: 'Terms and Condition 4', },  })

  const tc5 = await prisma.termsAndCondition.upsert({
    where: { name: 'Terms and Condition 5' },     update: {},     create: { name: 'Terms and Condition 5', },  })

  const tr1 = await prisma.taxrate.upsert({
    where: { name: '00.00% GST' },     update: {},     create: { name: '00.00% GST', rate: 0.00},  })

  const tr2 = await prisma.taxrate.upsert({
    where: { name: '05.00% GST' },     update: {},     create: { name: '05.00% GST', rate: 5.00},  })

  const tr3 = await prisma.taxrate.upsert({
    where: { name: '12.00% GST' },     update: {},     create: { name: '12.00% GST', rate: 12.00},  })

  const tr4 = await prisma.taxrate.upsert({
    where: { name: '18.00% GST' },     update: {},     create: { name: '18.00% GST', rate: 18.00},  })

  const tr5 = await prisma.taxrate.upsert({
    where: { name: '28.00% GST' },     update: {},     create: { name: '28.00% GST', rate: 28.00},  })

   const comp = await prisma.company.upsert({
     where: { name: 'Hero Agricultural Industries' },     update: {},     
        create: { name: 'Hero Agricultural Industries', address: "G T Karnal Road, Near Industial Area",
                city: "Bahalgarh", pin: "123466", mobile1: "9898989898", mobile2: "9797979797",
            email1:"aaaa@gmail.com", email2:"bbbb@gmail.com", gstin:"09AAAAA1234B1ZZ"},  })

  const unit1 = await prisma.unit.upsert({
    where: { name: 'KG' },     update: {},     create: { name: 'KG' },  })

  const unit2 = await prisma.unit.upsert({
    where: { name: 'Pc' },     update: {},     create: { name: 'Pc' },  })

  const unit3 = await prisma.unit.upsert({
    where: { name: 'Nos' },     update: {},     create: { name: 'Nos' },  })

  const unit4 = await prisma.unit.upsert({
    where: { name: 'Dz' },     update: {},     create: { name: 'Dz' },  })

  const unit5 = await prisma.unit.upsert({
    where: { name: 'Box' },     update: {},     create: { name: 'Box' },  })

  const adjType1 = await prisma.adjustmentType.upsert({
    where: { name: 'Fix Type' },     update: {},     create: { name: 'Fix Type' },  })

  const adjType2 = await prisma.adjustmentType.upsert({
    where: { name: 'Percentage Type' },     update: {},     create: { name: 'Percentage Type' },  })

  const adjEff1 = await prisma.adjustmentEffect.upsert({
    where: { name: 'Add' },     update: {},     create: { name: 'Add' },  })

  const adjEff2 = await prisma.adjustmentEffect.upsert({
    where: { name: 'Subtract' },     update: {},     create: { name: 'Subtract' },  })

  const pr1 = await prisma.product.upsert({
    where: { name: 'Wash Basin' },     update: {},
        create: { name: 'Wash Basin Type 1', code: 'WB0001', description: 'Made with finest material',
        unitId: 2, rate:"12500.00", hsn:'11025455', taxrateId: 3},  })

  const pr2 = await prisma.product.upsert({
    where: { name: 'Wash Basin' },     update: {},
        create: { name: 'Wash Basin Type 2', code: 'WB0002', description: 'Made with finest material',
        unitId: 2, rate:"15500.00", hsn:'11025455', taxrateId: 3},  })

  const pr3 = await prisma.product.upsert({
    where: { name: 'Wash Basin' },     update: {},
        create: { name: 'Wash Basin Type 3', code: 'WB0003', description: 'Made with finest material',
        unitId: 2, rate:"20500.00", hsn:'11025455', taxrateId: 3},  })

  const pr4 = await prisma.product.upsert({
    where: { name: 'Tap' },     update: {},
        create: { name: 'Tap Type 1', code: 'TP0001', description: 'Made with finest metal',
        unitId: 5, rate:"11000.00", hsn:'11022145', taxrateId: 4},  })

  const pr5 = await prisma.product.upsert({
    where: { name: 'Tap' },     update: {},
        create: { name: 'Tap Type 2', code: 'TP0002', description: 'Made with finest metal',
        unitId: 5, rate:"12500.00", hsn:'11025455', taxrateId: 4},  })

  const pr6 = await prisma.product.upsert({
    where: { name: 'Tap' },     update: {},
        create: { name: 'Tap Type 3', code: 'TP0003', description: 'Made with finest metal',
        unitId: 5, rate:"25000.00", hsn:'11022145', taxrateId: 4},  })

  const pr7 = await prisma.product.upsert({
    where: { name: 'Rain Water Shower' },     update: {},
        create: { name: 'Rain Water Shower', code: 'RWS0001', description: 'Made with finest Stainless Steel',
        unitId: 4, rate:"12500.00", hsn:'11022299', taxrateId: 5},  })

  const state1 = await prisma.state.upsert({
    where: { name: 'Delhi' },     update: {},     create: { name: 'Delhi', code:"07" },  })

  const state2 = await prisma.state.upsert({
    where: { name: 'Uttar Pradesh' },     update: {},     create: { name: 'Uttar Pradesh', code:'09' },  })

  const state3 = await prisma.state.upsert({
    where: { name: 'Haryana' },     update: {},     create: { name: 'Haryana', code: '06' },  })

  const state4 = await prisma.state.upsert({
    where: { name: 'Bihar' },     update: {},     create: { name: 'Bihar', code:'10' },  })

  const state5 = await prisma.state.upsert({
    where: { name: 'Goa' },     update: {},     create: { name: 'Goa', code: '30' },  })

  const qt1 = await prisma.quote.upsert({
    where: { id: 1 },     update: {},
        create: { quoteno: 1, ledgerId: 1, termsAndConditionId: 2, saleTypeId:1,
            quoteItem: {
              create:[
                { productId: 1, quantity: 10.25, rate: 11500 },
                { productId: 2, quantity: 1010.25, rate: 100.10 },
                { productId: 3, quantity: 100.00, rate: 1000.52 },
                { productId: 4, quantity: 10, rate: 1000 },
              ]
            } },  })

  const qt2 = await prisma.quote.upsert({
    where: { id: 2 },     update: {},
        create: { quoteno: 2, ledgerId: 2, termsAndConditionId: 1, saleTypeId:2,
            quoteItem: {
              create:[
                { productId: 2, quantity: 101.25, rate: 12500 },
                { productId: 3, quantity: 100.25, rate: 200.10 },
                { productId: 1, quantity: 10.00, rate: 2000.52 },
                { productId: 5, quantity: 1, rate: 100 },
              ]
            } },  })


    //   const bob = await prisma.user.upsert({
//     where: { email: 'bob@prisma.io' },
//     update: {},
//     create: {
//       email: 'bob@prisma.io',
//       name: 'Bob',
//       posts: {
//         create: [
//           {
//             title: 'Follow Prisma on Twitter',
//             content: 'https://twitter.com/prisma',
//             published: true,
//           },
//           {
//             title: 'Follow Nexus on Twitter',
//             content: 'https://twitter.com/nexusgql',
//             published: true,
//           },
//         ],
//       },
//     },
//   })
//  console.log({ alice, bob })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })