import express  from 'express'
import {registerController,loginController,testController} from '../controllers/authController.js'
//router object
import {isAdmin,requireSignIn} from '../middlewares/authMiddlewares.js'
const router=express.Router()

//routing


//register || post method
router.post('/register',registerController)
router.post('/login',loginController)
router.get("/test", requireSignIn,isAdmin,testController);
export default router