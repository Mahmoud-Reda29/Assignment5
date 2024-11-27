import Router from 'express'
import { addUser, deleteUser, getAllUsers, getUserByID, getUserByName, updateUser } from './Users/user.controller.js'
import {questionAnswer} from './QA/qa.controller.js'
import { majority } from './Bonus/bonus.controller.js'
const router = Router()

//!------- users end points -------------- 
router.get('/getAllUsers', getAllUsers)
router.get('/getUserByID/:id', getUserByID)
router.get('/getUserByName', getUserByName)
router.post('/addUser', addUser)
router.delete('/deleteUser/:id', deleteUser) //! id from params
router.delete('/deleteUser/', deleteUser) //! id from body
router.patch('/updateUser/:id', updateUser) //! id from params
//!------- users end points --------------
// !------- QA end points --------------
router.get('/QA/:questionNumber', questionAnswer)
// !------- QA end points --------------
// !------- Bonus end points --------------
router.get('/Bonus',majority)
// !------- Bonus end points --------------
export default router

