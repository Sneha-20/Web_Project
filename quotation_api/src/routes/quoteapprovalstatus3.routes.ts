import express from 'express';
const router = express.Router();
const controller = require('../controller/quoteapprovalstatus3');





/**
 * @swagger
 *  components:
 *   schemas:
 *     quoteapprovalstatus3:
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
 *   name:  quoteapprovalstatus3
 *   
 */


/**
 * @swagger
 * /quoteapprovalstatus3/getAll:
 *    get:
 *      summary: Get Api for quoteapprovalstatus3
 *      tags: [quoteapprovalstatus3]
 *      responses:
 *        "200":
 *          description: The quoteapprovalstatus3  get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus3'
 * 
 */

/**
 * @swagger 
 * /quoteapprovalstatus3/create:
 *    post:
 *      summary: Post quoteapprovalstatus3 api
 *      tags: [quoteapprovalstatus3]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus3'
 *      responses:
 *        "201":
 *          description: The quoteapprovalstatus3 get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/quoteapprovalstatus3'
 * 
 */



/**
 * @swagger
 * /quoteapprovalstatus3/getone/{id}:
 *   get:
 *     summary: Get Api for quoteapprovalstatus1 id
 *     tags: [quoteapprovalstatus3]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The quoteapprovalstatus3 get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/quoteapprovalstatus3'
 * 
 */

router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getone/:id", controller.getOne);

module.exports = router;
  

