import { Router } from 'express'
import UserController from './controllers/users/UserController'

export const routes = Router()

routes.get('/user', UserController.findAll)
routes.post('/register', UserController.create)
