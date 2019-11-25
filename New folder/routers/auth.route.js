const router = require('express').Router()
const bodyparser= require('body-parser')
const authcontroller=require('../controllers/authcontroller')
const check =require('express-validator').check

router.get("/signup",authcontroller.getsignup)
router.post(
    "/signup",
    bodyparser.urlencoded({extended:true}),
    check('username').not().isEmpty(),
    check('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage('Invalid format'),
    check('password')
    .not().isEmpty().withMessage('Password is required')
    .isLength({min:6})
    .withMessage("password must be at least 6 charaters"),
    check('confirm-password').custom((value,{req})=>{
         if(value===req.body.password) return true
         else throw 'passwords not equal'
    })
    ,

    authcontroller.postsignup
)
router.get("/login",authcontroller.getlogin)

 router.post(
     "/login",
     bodyparser.urlencoded({extended:true}),
     authcontroller.postlogin
 )
 router.all('/logout',authcontroller.logout)
 module.exports=router