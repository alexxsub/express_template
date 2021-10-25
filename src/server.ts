process.env['NODE_CONFIG_DIR'] = __dirname + '/configs'

// import 'dotenv/config'
require('dotenv').config()
import App from 'app'
import IndexRoute from '@routes/index.route'
import APIRoute from '@routes/api.route'
import validateEnv from '@utils/validateEnv'
import { logger } from '@utils/logger'


validateEnv()

const app = new App([new IndexRoute(),new APIRoute()])

app.listen()

  process.on('uncaughtException', (err, origin) => {
    setTimeout(() => {
      logger.error( `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`)
      app.disconnectDatabase()
      process.exit()
    }, 0)
  })
  process.on('SIGINT', (code) => {
    setTimeout(() => {
      logger.info(`Exited on event SIGINT with code: ${code}`)
      app.disconnectDatabase()
      process.exit()
    }, 0)
  })
// netstat -aon | findstr 4002
// Taskkill /F /PID 3737