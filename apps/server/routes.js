import { Router } from 'express'
import { userController } from './controllers/UserController.js'

export const routes = Router()

routes.get('/users', userController.index)
routes.get('/users/:id', userController.findById)
routes.post('/users', userController.create)
routes.put('/users/:email', userController.update)
routes.delete('/users/:email', userController.delete)
