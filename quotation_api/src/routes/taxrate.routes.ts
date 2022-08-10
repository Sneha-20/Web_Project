import express from 'express';
const router = express.Router();
const controller = require('../controller/taxrate');


/**
 * @swagger
 *  components:
 *   schemas:
 *     taxrate:
 *      type: object
 *      required:
 *         - name
 *         - code
 *         - active
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *           type: string
 *        code: 
 *          type: string
 *        active:
 *           type: boolean
 * 
 */

/**
 * @swagger
 * tags:
 *   name:  Taxrate
 *   
 */


/**
 * @swagger
 * /taxrate/getAll:
 *    get:
 *      summary: Get Api Taxrate
 *      tags: [Taxrate]
 *      responses:
 *        "200":
 *          description: The taxrate get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/taxrate'
 * 
 */

/**
 * @swagger 
 * /taxrate/create:
 *    post:
 *      summary: Post taxrate api
 *      tags: [Taxrate]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/taxrate'
 *      responses:
 *        "201":
 *          description: The taxrate get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/taxrate'
 * 
 */



/**
 * @swagger
 * /taxrate/getone/{id}:
 *   get:
 *     summary: Get Api for taxrate id
 *     tags: [Taxrate]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The taxrate get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/taxrate'
 * 
 */

router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

