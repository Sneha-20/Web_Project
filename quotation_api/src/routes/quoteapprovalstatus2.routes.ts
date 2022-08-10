import express from 'express';
const router = express.Router();
const controller = require('../controller/quoteapprovalstatus2');




/**
 * @swagger
 *  components:
 *   schemas:
 *     quoteapprovalstatus2:
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
 *   name:  quoteapprovalstatus2
 *   
 */


/**
 * @swagger
 * /quoteapprovalstatus2/getAll:
 *    get:
 *      summary: Get Api forquoteapprovalstatus2
 *      tags: [quoteapprovalstatus2]
 *      responses:
 *        "200":
 *          description: The quoteapprovalstatus2 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus2'
 * 
 */

/**
 * @swagger 
 * /quoteapprovalstatus2/create:
 *    post:
 *      summary: Post quoteapprovalstatus2 api
 *      tags: [quoteapprovalstatus2]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus2'
 *      responses:
 *        "201":
 *          description: The quoteapprovalstatus2 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus2'
 * 
 */



/**
 * @swagger
 * /quoteapprovalstatus2/getone/{id}:
 *   get:
 *     summary: Get Api for quoteapprovalstatus1 id
 *     tags: [quoteapprovalstatus2]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The quoteapprovalstatus2 get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus2'
 * 
 */



router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getone/:id", controller.getOne);

module.exports = router;
  

