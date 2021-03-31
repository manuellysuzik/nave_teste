import { Router } from 'express'

import UserController from './controllers/userController'
import SessionController from './controllers/sessionController'
import auth from './middlewares/auth'
import NaversController from './controllers/naversControllers'

const routes = Router()

routes.post("/signin", UserController.create)
routes.post("/login", SessionController.create)
routes.use(auth)
routes.get("/navers", NaversController.index)
routes.post("/navers", NaversController.store)

export default routes