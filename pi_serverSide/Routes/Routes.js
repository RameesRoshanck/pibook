const express=require ('express')
const {login, Signup } = require('../controllers/userController')
const router=express.Router()


/* ------------------------------ //user routes ----------------------------- */
router.post('/Signup',Signup)
router.post('/',login)


module.exports=router