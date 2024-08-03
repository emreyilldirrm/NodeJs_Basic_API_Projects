const router = require("express").Router()
const pageController = require("../controllers/pageController")

router.get("/",pageController.getHomepage)
router.get("/login",pageController.getLoginpage)
router.get("/register",pageController.getRegisterpage)


module.exports = router   