process.env['NODE_CONFIG_DIR'] = __dirname + '/configs'

import express from 'express'
import { connect,disconnect } from 'mongoose'
import { dbConnect } from '@/databases'
import { Routes } from '@interfaces/routes.interface'

import { logger} from '@utils/logger'
import initializeMiddlewares from '@/middlewares/initialize.middlewares'


class App {
  public app: express.Application
  public port: string | number
  public env: string

  constructor(routes: Routes[]) {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.env = process.env.NODE_ENV || 'development'
    dbConnect()
    initializeMiddlewares(this.app)
    this.initializeRoutes(routes)

  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`========> ENV: ${this.env} <=======`)
      logger.info(`🚀 Expreess server started on port: ${this.port}`)
    })
  }

  public getServer() {
    return this.app
  }

  public disconnectDatabase(){
    disconnect()
  }

  //routes
  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => this.app.use(route.url, route.router))
  }

}

export default App
