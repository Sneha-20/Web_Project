import express from "express";
const app = express();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let create = async (req: any, res: any, next: any) => {
  const {
    name,
    address,
    city,
    district,
    state,
    pin,
    country,
    
    mobile1,
    mobile2,
    mobile3,
    email1,
    email2,
    email3,
    website,
  
    contactperson,
    gstin,
    pan,
    active
  } = req.body;
  let result: any = {};
  try {
    let recordCreate = await prisma.ledger.create({
      data: {
        name,
        address,
        city,
        district,
        state,
        pin,
        country,
        
        mobile1,
        mobile2,
        mobile3,
        email1,
        email2,
        email3,
        website,
      
        contactperson,
        gstin,
        pan,
        active
              },
    });
    result.status = "success";
    result.id = recordCreate.id;
  } catch (error: any) {
    result.status = error;
    next(error);
    return;
  }
  res.json(result);
};

let getAll = async (req: any, res: any, next :any) => {
  let result: any = {};
  try{
  const data = await prisma.ledger.findMany({
  });
  if(data.length == 0){
    throw new Error("There is no active record");
  }
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
    const data = await prisma.ledger.findUnique({
      where: { id: Number(id) || undefined },
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


let deleteOne = async (req: any, res: any, next :any) => {
  const { id } = req.params
  let result: any = {};
  try{
      const data = await prisma.ledger.delete({
        where: {
          id: Number(id),
        },
      })
    
    result.status = "success";
    result.data = data;
    if(!data){
      result.message = "ID does not Exists";
    }
  }catch(error: any){
    result.status = error;
    console.log("zzzz", error.message)
    next(error)
    return;
  }
    res.json(result)
}

module.exports = {
    create,
    getAll, 
    getOne,
    deleteOne,
  };
  