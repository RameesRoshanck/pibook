const express=require ('express')
const {login, Signup, resetpass, getReset,verifyOtp } = require('../controllers/userController')
const router=express.Router()


/* ------------------------------ //user routes ----------------------------- */
router.post('/Signup',Signup)
router.post('/',login)
router.post('/reset',resetpass)
router.post('/resetNew',getReset)
router.post('/verifyotp',verifyOtp)



module.exports=router