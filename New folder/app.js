const express = require('express')
const path =require('path')
const session = require('express-session')
const SessionStore =require('connect-mongodb-session')(session)
const flash  = require('connect-flash')
const app =express()
const homerouter= require('./routers/homeroute')
 const productroute =require('./routers/product.route')
 const authroute= require('./routers/auth.route')
app.use(express.static(path.join(__dirname,'assets')))

app.use(express.static(path.join(__dirname,'images')))
app.use(flash())
const STORE = new SessionStore({
    uri:'mongodb://localhost:27017/Ecommerce',
    collection:'sessions'
})
app.use(session({
    secret: 'this is my secert secert  to hash  express.....', 
    resave:true, 
     saveUninitialized: false,
     store: STORE    
}))
app.set('view engine','ejs')
app.set('views','views') 
app.use('/',homerouter)

app.use('/',authroute)
app.use('/product',productroute)
app.get('/',(req,res,next) => {
   res.render('index')
})
app.listen(3000,(err)=>{
 
    console.log('server listen on port 3000')
})
