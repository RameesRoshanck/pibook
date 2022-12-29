const express=require ('express')
const { addPost } = require('../controllers/postController')
const {login, Signup, resetpass, getReset,verifyOtp } = require('../controllers/userController')
const router=express.Router()
const multer=require('../Middleware/multer')



/* ------------------------------ //user routes ----------------------------- */
router.post('/Signup',Signup)
router.post('/',login)
router.post('/reset',resetpass)
router.post('/resetNew',getReset)
router.post('/verifyotp',verifyOtp)





/* ------------------------------ //post router ----------------------------------- */

router.post("/addpost",multer.array('image',1),addPost)

module.exports=router