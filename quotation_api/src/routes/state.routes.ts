import express from 'express';
const router = express.Router();
const controller = require('../controller/state');





/**
 * @swagger
 *  components:
 *   schemas:
 *     state:
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
 *   name:  State
 *   
 */


/**
 * @swagger
 * /state/getAll:
 *    get:
 *      summary: Get Api State
 *      tags: [State]
 *      responses:
 *        "200":
 *          description: The State get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/State'
 * 
 */

/**
 * @swagger 
 * /state/create:
 *    post:
 *      summary: Post state api
 *      tags: [State]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/state'
 *      responses:
 *        "201":
 *          description: The state get api.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/state'
 * 
 */



/**
 * @swagger
 * /state/getone/{id}:
 *   get:
 *     summary: Get Api for State id
 *     tags: [State]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: integer
 *         required: true
 *     responses:
 *       "200":
 *         description: The state get by id api.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/state'
 * 
 */

router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

