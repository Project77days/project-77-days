import { Router } from 'express'
import { userController } from './controllers/UserController.js'

export const routes = Router()

routes.get('/users', userController.index)
routes.get('/users/:id', userController.findById)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)
