import express from 'express';
const router = express.Router();
const controller = require('../controller/termsandcondition');




/**
 * @swagger
 *  components:
 *   schemas:
 *     termsandconditions:
 *      type: object
 *      required:
 *         - name
 *         - termsandconditions
 *         - active
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *           type: string
 *        termsandconditions: 
 *          type: string
 *        active:
 *           type: boolean
 * 
 */

/**
 * @swagger
 * tags:
 *   name:  termsandconditions
 *   
 */


/**
 * @swagger
 * /termsandcondition/getAll:
 *    get:
 *      summary: Get Api termsandconditions
 *      tags: [termsandconditions]
 *      responses:
 *        "200":
 *          description: The termsandconditions get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/termsandconditions'
 * 
 */

/**
 * @swagger 
 * /termsandcondition/create:
 *    post:
 *      summary: Post termsandconditions api
 *      tags: [termsandconditions]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/termsandconditions'
 *      responses:
 *        "201":
 *          description: The termsandconditions get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/termsandconditions'
 * 
 */



/**
 * @swagger
 * /termsandcondition/getone/{id}:
 *   get:
 *     summary: Get Api for termsandconditions id
 *     tags: [termsandconditions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The termsandconditions get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/termsandconditions'
 * 
 */


router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

