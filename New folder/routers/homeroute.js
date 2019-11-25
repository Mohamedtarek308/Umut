const router = require('express').Router()
const homeController = require('../controllers/homecontrollers')
router.get('/',homeController.getHome)

module.exports=router
