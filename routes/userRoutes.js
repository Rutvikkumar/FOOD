const express = require('express');
const users = express();
const create = require("../controller/userCtr");


const router = express.Router();


router.get('/',create.Register);
router.post('/',create.createUser);
router.get('/',create.verifyMail)



module.exports = router;


