import express from 'express';
const router = express.Router();
const controller = require('../controller/company');


/**
 * @swagger
 *  components:
 *   schemas:
 *     Company:
 *      type: object
 *      required:
 *         - name
 *         - city
 *         - address
 *         - district
 *         - state
 *         - pin
 *         - country
 *         - mobile1
 *         - mobile2
 *         - mobile3
 *         - email1
 *         - email2
 *         - email3
 *         - website
 *         - contactperson
 *         - gstin
 *         - pan
 *         - active
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *          type: string
 *        address:
 *          type: string
 *        city:
 *          type: string
 *        district:
 *           type: string
 *        state:
 *           type: string
 *        pin:
 *            type: string
 *        country:
 *            type: string
 *        mobile1:
 *            type: string
 *        mobile2:
 *            type: string
 *        mobile3:
 *            type: string
 *        email1:
 *            type: string
 *        email2:
 *            type: string
 *        email3:
 *            type: string
 *        website:
 *            type: string
 *        contactperson:
 *            type: string
 *        gstin:
 *            type: string
 *        pan:
 *            type: string 
 *        active:
 *            type: boolean
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Company
 *   
 */


/**
 * @swagger
 * /company/getAll:
 *    get:
 *      summary: Get Api for Company
 *      tags: [Company]
 *      responses:
 *        "200":
 *          description: The Company api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Company'
 * 
 * 
 * 
 *  
 * 
 */

//router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
//router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);


module.exports = router;
  

