import express from 'express';
const router = express.Router();
const controller = require('../controller/user');

router.post("/login",controller.login);

router.post("/create",controller.create);
router.get("/getAll",controller.getAll);
router.get("/getone/:id",controller.getOne);
//router.get("/deleteone/:id",controller.deleteOne);

module.exports = router;
  

