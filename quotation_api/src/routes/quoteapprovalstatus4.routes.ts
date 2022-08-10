import express from 'express';
const router = express.Router();
const controller = require('../controller/quoteapprovalstatus4');





/**
 * @swagger
 *  components:
 *   schemas:
 *     quoteapprovalstatus4:
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
 *   name:  quoteapprovalstatus4
 *   
 */


/**
 * @swagger
 * /quoteapprovalstatus4/getAll:
 *    get:
 *      summary: Get Api forquoteapprovalstatus4
 *      tags: [quoteapprovalstatus4]
 *      responses:
 *        "200":
 *          description: The quoteapprovalstatus4 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus4'
 * 
 */

/**
 * @swagger 
 * /quoteapprovalstatus2/create:
 *    post:
 *      summary: Post quoteapprovalstatus4 api
 *      tags: [quoteapprovalstatus4]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus4'
 *      responses:
 *        "201":
 *          description: The quoteapprovalstatus4 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus4'
 * 
 */



/**
 * @swagger
 * /quoteapprovalstatus4/getone/{id}:
 *   get:
 *     summary: Get Api for quoteapprovalstatus4 id
 *     tags: [quoteapprovalstatus4]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The quoteapprovalstatus4 get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus4'
 * 
 */
router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getone/:id", controller.getOne);

module.exports = router;
  

