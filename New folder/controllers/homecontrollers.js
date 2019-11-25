const produtsmodel =require('../models/products.model')
exports.getHome = (req,res,next)=>{
    // get produts
    // render index.ejs


  let category =req.query.category
  if(category && category !== 'All'){
      produtsmodel.getgategory(category).then(products=>{
        res.render('index',{
            products:products
        })
    })
  }else{
    produtsmodel.getAllProducts(category).then(products=>{
        res.render('index',{
            products:products
        })
    })
  }
    
}