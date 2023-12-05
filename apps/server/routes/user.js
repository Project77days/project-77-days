import { Router } from 'express'
import UserController from '../controllers/users/UserController'

export const routes = Router()

routes.get('/user', UserController.findAll)
routes.get('/:id', UserController.findById)
routes.post('/user/register', UserController.create)
routes.delete('/user/:id', UserController.delete)
routes.put('/user/:id', UserController.update)
