const express = require("express");
const users = express();
const create = require("../controller/userCtr");

const router = express.Router();

router.get("/Register", create.Register);
router.post("/", create.createUser);
// router.get("/", create.verifyMail);
router.get("/login",create.login);
router.get("/",create.index);

module.exports = router;
