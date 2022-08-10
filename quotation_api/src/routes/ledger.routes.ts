import express from 'express';
const router = express.Router();
const controller = require('../controller/ledger');


/**
 * @swagger
 *  components:
 *   schemas:
 *     Ledger:
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
 *   name: Ledger
 *   
 */


/**
 * @swagger
 * /ledger/getAll:
 *    get:
 *      summary: Get Api for Product
 *      tags: [Ledger]
 *      responses:
 *        "200":
 *          description: The Ledger get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Ledger'
 * 
 */

/**
 * @swagger 
 * /ledger/create:
 *    post:
 *      summary: Post ledger api
 *      tags: [Ledger]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ledger'
 *      responses:
 *        "201":
 *          description: The ledger get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Ledger'
 * 
 */



/**
 * @swagger
 * /ledger/getone/{id}:
 *   get:
 *     summary: Get Api for ledger id
 *     tags: [Ledger]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The ledger get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ledger'
 * 
 */





router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

