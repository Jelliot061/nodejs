import express from 'express'
import UserController from './controller/user.controller.js'

const UserRouter = express.Router()

UserRouter.post('/', UserController.addUser)
UserRouter.get('/', UserController.getAllUsers)


export default UserRouter