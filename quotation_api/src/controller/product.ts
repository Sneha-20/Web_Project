import express from "express";
const app = express();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let create = async (req: any, res: any, next: any) => {
  const {
    name,
    code,
    description,
    unitId,
    rate,
    hsn,
    taxrateId,
    active      
  } = req.body;
  let result: any = {};
  try {
    let recordCreate = await prisma.product.create({
      data: {
        name,
        code,
        description,
        unitId,
        rate,
        hsn,
        taxrateId,
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
  const data = await prisma.product.findMany({
      include : {
          unit : true,
          taxrate : true,
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
    const data = await prisma.product.findUnique({
      include : {
        unit : true,
        taxrate : true,
    },
    where: { id: Number(id) || undefined },
  });
  result.status = "success";
  result.data = data;
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


let deleteOne = async (req: any, res: any, next :any) => {
  const { id } = req.params
  let result: any = {};
  try{
      const data = await prisma.product.delete({
        where: {
          id: Number(id),
        },
      })
    
    if(!data){
      throw new Error("There is no active Record");
    }
    result.status = "success";
    result.data = data;
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
  