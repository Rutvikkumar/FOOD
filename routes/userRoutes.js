const express = require("express");
const users = express();
const create = require("../controller/userCtr");
const all =  require("../controller/allhost");
const product = require("../controller/popular_pro");

const router = express.Router();

router.get("/Register", create.Register);
router.post("/", create.createUser);
// router.get("/", create.verifyMail);
router.get("/login",create.login);
router.get("/",create.getAllProducts);
router.post("/login",create.verifyLogin);

//? all hosting

router.get("/compare",all.compare);
router.get("/wish",all.wish);
router.get("/cart",all.cart);
router.get("/right",all.shopproright);



//? for products


module.exports = router;
