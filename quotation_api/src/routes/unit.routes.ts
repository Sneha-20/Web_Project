import express from 'express';
const router = express.Router();
const controller = require('../controller/unit');


/**
 * @swagger
 *  components:
 *   schemas:
 *     unit:
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
 *   name:  unit
 *   
 */


/**
 * @swagger
 * /unit/getAll:
 *    get:
 *      summary: Get Api unit
 *      tags: [unit]
 *      responses:
 *        "200":
 *          description: The unit get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/unit'
 * 
 */

/**
 * @swagger 
 * /unit/create:
 *    post:
 *      summary: Post unit api
 *      tags: [unit]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/unit'
 *      responses:
 *        "201":
 *          description: The unit  get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/unit'
 * 
 */



/**
 * @swagger
 * /unit/getone/{id}:
 *   get:
 *     summary: Get Api for unit id
 *     tags: [unit]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The unit get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/unit'
 * 
 */

router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

