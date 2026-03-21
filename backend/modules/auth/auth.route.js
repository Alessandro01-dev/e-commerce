const express = require("express")
const router = express.Router()
const authController = require('./auth.controller')
const verifyToken = require("../../middlewares/auth/verifyToken")

router.get('/me', verifyToken, authController.loggedUser)

router.post("/login", authController.login)

module.exports = router