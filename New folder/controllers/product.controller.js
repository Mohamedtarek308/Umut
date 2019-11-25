 const productsmodel=require('../models/products.model')
 exports.getproduct=(req,res,next)=>{
    productsmodel.getfirstproduct().then(product =>{
        res.render('product',{
            product:product
        })
    })
 }
exports.getproductbyid=(req,res,next)=>{
 // get id 
 // get product 
 // render
 let id =req.params.id
 productsmodel.getproductbyid(id).then((product)=>{
     res.render('product',{
         product:product
     })
 })
}