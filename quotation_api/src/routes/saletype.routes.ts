import express from 'express';
const router = express.Router();
const controller = require('../controller/saletype');



/**
 * @swagger
 *  components:
 *   schemas:
 *     Saletype:
 *      type: object
 *      required:
 *         - name
 *         - active
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *           type: string
 *        active:
 *           type: boolean
 * 
 */

/**
 * @swagger
 * tags:
 *   name:  Saletype
 *   
 */


/**
 * @swagger
 * /saletype/getAll:
 *    get:
 *      summary: Get Api Saletype
 *      tags: [Saletype]
 *      responses:
 *        "200":
 *          description: The Saletype get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Saletype'
 * 
 */

// /**
//  * @swagger 
//  * /saletype/create:
//  *    post:
//  *      summary: Post Saletype api
//  *      tags: [Saletype]
//  *      requestBody:
//  *         required: true
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Saletype'
//  *      responses:
//  *        "201":
//  *          description: The Saletype get api.
//  *          content:
//  *            application/json:
//  *              schema:
//  *                $ref: '#/components/schemas/Saletype'
//  * 
//  */



/**
 * @swagger
 * /saletype/getone/{id}:
 *   get:
 *     summary: Get Api for Saletype id
 *     tags: [Saletype]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The saletype get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Saletype'
 * 
 */
//router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

