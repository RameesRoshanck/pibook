const express=require ('express')
const { addPost, updatePost, deletePost, likePost, getPost, getTimeLine } = require('../controllers/postController')
const {login, Signup, resetpass, getReset,verifyOtp } = require('../controllers/authController')
const router=express.Router()
const multer=require('../Middleware/multer')
const { getSingleUser, followUser, unFollowUser } = require('../controllers/userController')



/* ------------------------------ //auth routes ----------------------------- */
router.post('/Signup',Signup)
router.post('/',login)
router.post('/reset',resetpass)
router.post('/resetNew',getReset)
router.post('/verifyotp',verifyOtp)




/* ------------------------ //userControllers routes ------------------------ */

//get single user
router.get('/singleUser/:id',getSingleUser)
//follow
router.put("/followUser/:id/follow",followUser)
//unfollow
router.put("/unfollowUser/:id/unfollow",unFollowUser)




/* ------------------------------ //post router -------------------------------- */

//create a post
router.post("/addpost",multer.array('image',1),addPost)
//update a post
router.put("/updatePost/:id",updatePost)
//delete a post
router.delete("/deletePost/:id",deletePost)
//like & unlike a post
router.put("/userlike/:id/like",likePost)
//get a post
router.get("/getPost/:id",getPost)
// get time line of post
router.get("/getTimeline",getTimeLine)




module.exports=router