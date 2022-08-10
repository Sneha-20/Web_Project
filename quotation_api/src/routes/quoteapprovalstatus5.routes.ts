import express from 'express';
const router = express.Router();
const controller = require('../controller/quoteapprovalstatus5');



/**
 * @swagger
 *  components:
 *   schemas:
 *     quoteapprovalstatus5:
 *      type: object
 *      required:
 *         - name
 *         - remark
 *         - active
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *           type: string
 *        remark:
 *            type: string
 *        active:
 *            type: boolean
 * 
 */

/**
 * @swagger
 * tags:
 *   name:  quoteapprovalstatus5
 *   
 */


/**
 * @swagger
 * /quoteapprovalstatus5/getAll:
 *    get:
 *      summary: Get Api forquoteapprovalstatus5
 *      tags: [quoteapprovalstatus5]
 *      responses:
 *        "200":
 *          description: The quoteapprovalstatus5 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus5'
 * 
 */

/**
 * @swagger 
 * /quoteapprovalstatus5/create:
 *    post:
 *      summary: Post quoteapprovalstatus5 api
 *      tags: [quoteapprovalstatus5]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus5'
 *      responses:
 *        "201":
 *          description: The quoteapprovalstatus5 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus5'
 * 
 */



/**
 * @swagger
 * /quoteapprovalstatus5/getone/{id}:
 *   get:
 *     summary: Get Api for quoteapprovalstatus5 id
 *     tags: [quoteapprovalstatus5]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The quoteapprovalstatus5 get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus5'
 * 
 */
router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getone/:id", controller.getOne);

module.exports = router;
  

