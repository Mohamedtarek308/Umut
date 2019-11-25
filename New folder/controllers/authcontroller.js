const authmodel= require('../models/auth.model')
const validationResult =require('express-validator').validationResult

exports.getsignup =(req,res,next)=>{
    res.render("signup",{
        authError:req.flash('authError')[0],
        validationErrors:req.flash('validationErrors')
    })
} 

exports.postsignup =(req,res,next)=>{
    
     if(validationResult(req).isEmpty()){
   authmodel.createNewUser(req.body.username,req.body.email,req.body.password)
   .then(()=> res.redirect("/login"))
   .catch(err =>{ 
      req.flash('authError',err)
    res.redirect("/signup")
});
     } else{
         req.flash('validationErrors',validationResult(req).array())
         res.redirect('/signup')
     }
}

exports.getlogin =(req,res,next)=>{
  
    res.render("login",{
        authError:req.flash('authError')[0]
    })
}
exports.postlogin=(req,res,next)=>{
    authmodel.login(req.body.email,req.body.password).then((id)=> {
        req.session.userId = id
        res.redirect("/")
    }).catch(err =>{
        //console.log(err)
        req.flash('authError',err)
        res.redirect("/login")
    })
}
exports.logout=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
}