require('dotenv').config()
const express=require ('express')
const connectDB=require ('./config/confing')
const Router=require ('./Routes/Routes')
var cors = require('cors')
var cookieParser = require('cookie-parser')




const app=express()
app.use(cookieParser()) 
const PORT=process.env.PORT

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use('/',Router)

app.listen(PORT,()=>{
    console.log('server start');
})