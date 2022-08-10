import express from 'express';
const router = express.Router();
const controller = require('../controller/quoteapprovalstatus1');





/**
 * @swagger
 *  components:
 *   schemas:
 *     quoteapprovalstatus1:
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
 *   name:  quoteapprovalstatus1
 *   
 */


/**
 * @swagger
 * /quoteapprovalstatus1/getAll:
 *    get:
 *      summary: Get Api forquoteapprovalstatus1
 *      tags: [quoteapprovalstatus1]
 *      responses:
 *        "200":
 *          description: The quoteapprovalstatus1 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus1'
 * 
 */

/**
 * @swagger 
 * /quoteapprovalstatus1/create:
 *    post:
 *      summary: Post quoteapprovalstatus1t api
 *      tags: [quoteapprovalstatus1]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus1'
 *      responses:
 *        "201":
 *          description: The quoteapprovalstatus1 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus1'
 * 
 */



/**
 * @swagger
 * /quoteapprovalstatus1/getone/{id}:
 *   get:
 *     summary: Get Api for quoteapprovalstatus1 id
 *     tags: [quoteapprovalstatus1]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The quoteapprovalstatus1 get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus1'
 * 
 */




router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getone/:id", controller.getOne);

module.exports = router;
  

