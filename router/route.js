import express from 'express';
import { GetUserData, UpdateUserData, deleteUserData, RegisterUser } from '../controller/HomeController.js';



const router = express.Router();

router.post('/register', RegisterUser)
router.get('/getuser', GetUserData)
router.delete('/deleteuser', deleteUserData)
router.patch('/updateuser', UpdateUserData)


export default router;