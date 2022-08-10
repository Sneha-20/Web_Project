import express, { response } from "express";
const request = require("request");
const app = express();
const  crypto = require('crypto');
import { PrismaClient } from "@prisma/client";
import { diffieHellman } from "crypto";
const fs = require('fs');


const prisma = new PrismaClient();
 let cache  : any = {};
 //const value = file.sessionUserValue;

let create = async (req: any, res: any, next: any) => {
  const {
    name,
    username,
    password,
    active,
    roleId      
  } = req.body;
  let result: any = {};
  try {
    let algorithm = "sha256"
    let digest1 = crypto.createHash(algorithm).update(password).digest("hex")
      console.log(digest1)
    let recordCreate = await prisma.user.create({
      data: {
        name,
        username,
        password:digest1,
        active,
        roleId      
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
  const data = await prisma.user.findMany({
    include : {
        role : true,
    },
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
    const data = await prisma.user.findUnique({
        include : {
            role : true,
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

let login : any = async (req: any, res: any, next :any) => {

    let {
        username,
        password
      } = req.body;

      let algorithm = "sha256"
      let digest2 = crypto.createHash(algorithm).update(password).digest("hex")
       console.log(digest2)


     let result: any = {};
      try{

         const data : any = await prisma.user.findMany({
          include : {
              role : true,
          },
          where: 
          {
            AND: [
              { username: username}, 
              {password:digest2}
            ],
          }  
        });

        console.log(data)
    

        if(data.length >=2)
        {
          
        
            throw new Error("Login failed .. try again");

        }
        else{
      
        if(data.length ==1){ 
          result.msg="Loginn"
        //   request.post({
        //     "header": { "content-type": "application/json" },
        //     url:' http://localhost:5500/create/session', 
        //     body:req.body,
        //     json: true
        // }, function(err:any, response:any, body:any){
        //       result.token = body.token
        //       console.log(body)
               res.json(result)
          
           
        // })
       
        }
        else if(data.length ==0 || data.length == null)
        {
          
          //result.message = "ID or  Password  does not Exists"
          throw new Error("ID or  Password  does not Exists");
          

        }
       
      }
      
    }catch(error: any){
      throw new Error(error);
    
    }
    
  
  
}
  



  
  module.exports = {
    create,
    getAll, 
    getOne,
    login
    
    
    
  };
  