const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const expressLayouts = require ('express-ejs-layouts');


const app = express();
connectDB();
//ejs 
app.use(expressLayouts);
app.set('view engine','ejs');   

//init middleware
app.use(express.json({extended:false}));
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => res.render('welcome'));
//Define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log('server stared on port ${PORT} '+PORT));
