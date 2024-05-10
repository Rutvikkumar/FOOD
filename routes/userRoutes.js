const express = require("express");
const users = express();
const create = require("../controller/userCtr");
const all =  require("../controller/allhost");

const router = express.Router();

router.get("/Register", create.Register);
router.post("/", create.createUser);
// router.get("/", create.verifyMail);
router.get("/login",create.login);
router.get("/",create.index);
router.post("/login",create.verifyLogin);

//? all hosting

router.get("/compare",all.compare);
router.get("/wish",all.wish);
router.get("/cart",all.cart);

module.exports = router;
