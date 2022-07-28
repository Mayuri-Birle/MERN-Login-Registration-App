const express = require('express');
const router = express.Router()
const UserController = require("../controller/userAuth/user")
router.post('/register', UserController.RegisterUser)
router.get("/login",UserController.LoginUser)

module.exports = router