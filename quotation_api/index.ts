import express from 'express';
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./src/routes/main');
const commonMiddleware = require('./src/middleware/common');
const errorHandle = require('./src/middleware/error_handle');
const swaagerjsdc =  require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express')

//
app.use(commonMiddleware);

app.use(routes);

app.use(errorHandle);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quotation API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application  with Swagger",
      
      
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaagerjsdc(options);
app.use(
  "/api-docs",
  swaggerui.serve,
  swaggerui.setup(specs,  { explorer: true })
);




app.listen(process.env.API_PORT, () =>
{
  console.log(`
🚀 Server ready at: http://localhost:${process.env.API_PORT}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
   

})
