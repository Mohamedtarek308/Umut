const mongoose = require('mongoose')
const DB_URL= 'mongodb://localhost:27017/Ecommerce'
const productSchema=mongoose.Schema({
    name:String,
    image:String,
    price:String,
    description:String,
    category:String
})
const Product=mongoose.model('product',productSchema)
exports.getAllProducts = () => {
//connect to db 
// get products 
//disconnect
return new Promise((resolve,reject)=>{

    mongoose.connect(DB_URL).then(()=>{
        return Product.find({})
         }).then(products =>{
              mongoose.disconnect()
              resolve(products)
     }).catch(err=>
        {
            mongoose.disconnect()
         reject(err)
     })
})
}
exports.getgategory = (category) => {
    //connect to db 
    // get products 
    //disconnect
    return new Promise((resolve,reject)=>{
    
        mongoose.connect(DB_URL).then(()=>{
            return Product.find({category:category})
             }).then(products =>{
                  mongoose.disconnect()
                  resolve(products)
         }).catch(err=>reject(err))
    })
    
}
exports.getproductbyid = (id) => {
    //connect to db 
    // get products 
    //disconnect
    return new Promise((resolve,reject)=>{
    
        mongoose.connect(DB_URL).then(()=>{
            return Product.findById(id)
             }).then(products =>{
                  mongoose.disconnect()
                  resolve(products)
         }).catch(err=>reject(err))
    })
    
}
exports.getfirstproduct= ()=>{
    return new Promise((resolve,reject)=>{
    
        mongoose.connect(DB_URL).then(()=>{
            return Product.findOne({})
             }).then(products =>{
                  mongoose.disconnect()
                  resolve(products)
         }).catch(err=>reject(err))
    })
}