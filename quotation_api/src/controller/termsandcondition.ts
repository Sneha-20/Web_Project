import express from "express";
const app = express();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let create = async (req: any, res: any, next: any) => {
  const {
    name,
    termsandconditions,
    active      
  } = req.body;
  let result: any = {};
  try {
    let recordCreate = await prisma.termsAndCondition.create({
      data: {
        name,
        termsandconditions,
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
  const data = await prisma.termsAndCondition.findMany({
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
    const data = await prisma.termsAndCondition.findUnique({
      where: { id: Number(id) || undefined },
  });
  if(!data){
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


let deleteOne = async (req: any, res: any, next :any) => {
  const { id } = req.params
  let result: any = {};
  try{
      const data = await prisma.product.delete({
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
  