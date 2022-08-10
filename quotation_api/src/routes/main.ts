import express from 'express';
const router = express.Router();
const companyRoutes = require("../routes/company.routes");
const ledgerRoutes = require("../routes/ledger.routes");
const productRoutes = require("../routes/product.routes");
const quoteRoutes = require("../routes/quote.routes");
const quoteapprovalstatus1Routes = require("../routes/quoteapprovalstatus1.routes");
const quoteapprovalstatus2Routes = require("../routes/quoteapprovalstatus2.routes");
const quoteapprovalstatus3Routes = require("../routes/quoteapprovalstatus3.routes");
const quoteapprovalstatus4Routes = require("../routes/quoteapprovalstatus4.routes");
const quoteapprovalstatus5Routes = require("../routes/quoteapprovalstatus5.routes");
//const quotedetailRoutes = require("../routes/quotedetail.routes");
const saleTypeRoutes = require("../routes/saletype.routes");
const stateRoutes = require("../routes/state.routes");
const taxrateRoutes = require("../routes/taxrate.routes");
const termsandconditionRoutes = require("../routes/termsandcondition.routes");
const unitRoutes = require("../routes/unit.routes");
const userRoutes = require("../routes/user.routes");


router.use('/company',companyRoutes);
router.use('/ledger', ledgerRoutes);
router.use('/product', productRoutes);
router.use('/quote', quoteRoutes);
router.use('/quoteapprovalstatus1', quoteapprovalstatus1Routes);
router.use('/quoteapprovalstatus2', quoteapprovalstatus2Routes);
router.use('/quoteapprovalstatus3', quoteapprovalstatus3Routes);
router.use('/quoteapprovalstatus4', quoteapprovalstatus4Routes);
router.use('/quoteapprovalstatus5', quoteapprovalstatus5Routes);
//router.use('/quotedetail', quotedetailRoutes);
router.use('/saletype', saleTypeRoutes);
router.use('/state', stateRoutes);
router.use('/taxrate', taxrateRoutes);
router.use('/termsandcondition', termsandconditionRoutes);
router.use('/unit', unitRoutes);
router.use('/user', userRoutes);


module.exports = router;