import { Router } from 'express'

import UserController from './controllers/userController'
import SessionController from './controllers/sessionController'
import auth from './middlewares/auth'
import NaversController from './controllers/naversControllers'
import ProjectController from './controllers/projectController'

const routes = Router()

routes.post("/signin", UserController.create)
routes.post("/login", SessionController.create)
routes.use(auth)
routes.get("/navers", NaversController.index)
routes.post("/navers", NaversController.store)
routes.get("/navers/:id_naver", NaversController.show)
routes.post("/projects", ProjectController.store)
routes.get("/projects", ProjectController.index)
routes.get("/projects/:id_projects", ProjectController.show)
routes.post("/signout", SessionController.exit)

export default routes