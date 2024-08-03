const router = require("express").Router()
const userPageController = require("../controllers/userPageController")


router.post("/register",userPageController.createUser)
router.post("/login",userPageController.loginUSer)

module.exports = router
