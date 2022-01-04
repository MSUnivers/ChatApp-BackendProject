const express = require("express");
const router = express.Router();
const userRegister = require("../controllers/RegisterController");

router.route('/register').post(userRegister);


module.exports = router;