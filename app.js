const  express= require('express')
const router = require('./router.js') 
//import database from './database/index.js'
const app = express()
app.use(express.json())
app.use(router);

  
module.exports = app;
  
 