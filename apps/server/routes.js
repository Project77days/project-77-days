import { Router } from 'express'
import { singUp, findAll } from './controllers/users/index.js'

export const routes = Router()

routes.get('/', findAll)
routes.post('/signup', singUp)
