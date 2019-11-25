const router = require('express').Router()
 const productcontroller=require('../controllers/product.controller')
 router.get('/',productcontroller.getproduct)
router.get('/:id',productcontroller.getproductbyid)

module.exports=router
