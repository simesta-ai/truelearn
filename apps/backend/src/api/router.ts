import express from 'express'
import authRoutes from './v1/modules/auth/routes'
import userRoutes from './v1/modules/user/routes'
import courseRoutes from './v1//modules/course/routes'
import chatRoutes from './v1/modules/chat/routes'
import JwtService, { IJwt } from '../libs/utils/services/jwt'
import { errorHandler } from '../libs/utils/handlers/error'

class Router {
  private app: express.Application
  private jwtService: IJwt

  constructor(app: express.Application) {
    this.app = app
    this.jwtService = new JwtService()
  }

  public configRootRoutes() {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('TrueLearn API - Visit https://github.com/simesta-ai/truelearn for usage.')
    })
  }

  public configAuthRoutes() {
    this.app.use('/auth', authRoutes)
  }

  public configUserRoutes() {
    this.app.use('/users', this.jwtService.verifyToken, userRoutes)
    // this.app.use(errorHandler)
  }

  public configureCourseRoutes() {
    this.app.use('/courses', this.jwtService.verifyToken, courseRoutes)
  }
  public configureChatRoutes() {
    this.app.use('/chat', chatRoutes)
    this.app.use(errorHandler)
  }
}

export default Router
