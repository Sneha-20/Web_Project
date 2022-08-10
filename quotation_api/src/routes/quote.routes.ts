import express from 'express';
const router = express.Router();
const controller = require('../controller/quote');



/**
 * @swagger
 *  components:
 *   schemas:
 *     Quote:
 *      type: object
 *      required:
 *        - quoteno
 *        - ledgerId
 *        - termsAndConditionId
 *        - saleTypeId
 *        - quoteItem
 *      properties:
 *        id:
 *          type: integer
 *        quoteno:
 *          type: string
 *        ledgerId:
 *          type: integer
 *        termsAndConditionId:
 *           type: integer
 *        saleTypeid:
 *           type: integer
 *        quoteItem:
 *            type: integer
 *        
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Quote
 *   
 */


/**
 * @swagger
 * /quote/getAll:
 *    get:
 *      summary: Get Api for Quote
 *      tags: [Quote]
 *      responses:
 *        "200":
 *          description: The Quote get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Quote'
 * 
 */

/**
 * @swagger 
 * /quote/create:
 *    post:
 *      summary: Post quote api
 *      tags: [Quote]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 *      responses:
 *        "201":
 *          description: TheQuote get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Quote'
 * 
 */



/**
 * @swagger
 * /quote/getone/{id}:
 *   get:
 *     summary: Get Api for Quote id
 *     tags: [Quote]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The Quoteget by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 * 
 */

/**
 * @swagger
 * /product/deleteone/{id}:
 *   get:
 *     summary: delete Api for Quotet id
 *     tags: [Quote]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "204":
 *         description: The Quote get by id api is deleted.
 *        
 * 
 */



router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
router.post("/edit",controller.editOne);
router.delete("/deleteone/:id",controller.deleteOneQuoteProduct);

module.exports = router;
  

