import express from 'express';
const router = express.Router();
const controller = require('../controller/product');


/**
 * @swagger
 *  components:
 *   schemas:
 *     Product:
 *      type: object
 *      required:
 *         - name
 *         - code
 *         - description
 *         - unitId
 *         - rate
 *         - hsn
 *         - taxrateId
 *         - active
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *          type: string
 *        code:
 *          type: string
 *        description:
 *          type: string
 *        unitId:
 *           type: integer
 *        rate:
 *           type: decimal
 *        hsn:
 *            type: string
 *        taxrateId:
 *            type: integer
 *        active:
 *            type: boolean
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Product
 *   
 */


/**
 * @swagger
 * /product/getAll:
 *    get:
 *      summary: Get Api for Product
 *      tags: [Product]
 *      responses:
 *        "200":
 *          description: The Product get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 * 
 */

/**
 * @swagger 
 * /product/create:
 *    post:
 *      summary: Post product api
 *      tags: [Product]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *      responses:
 *        "201":
 *          description: The Product get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 * 
 */



/**
 * @swagger
 * /product/getone/{id}:
 *   get:
 *     summary: Get Api for Product id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The Product get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * 
 */

/**
 * @swagger
 * /product/deleteone/{id}:
 *   get:
 *     summary: delete Api for Product id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "204":
 *         description: The Product get by id api is deleted.
 *        
 * 
 */

router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getone/:id", controller.getOne);
router.get("/deleteone/:id", controller.deleteOne);

module.exports = router;
  

