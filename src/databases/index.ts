import config from 'config'
import { dbConfig } from '@interfaces/db.interface'
import { connect,disconnect,set } from 'mongoose'
import { logger} from '@utils/logger'

const { host, port, database }: dbConfig = config.get('dbConfig')
const env=process.env.NODE_ENV || 'development'

export const dbConnection = {
  url: `mongodb://${host}:${port}/${database}`,
  options: {
      useNewUrlParser: true,
      retryWrites: true
  }
}
export const dbConnect = function() {
  if (env !== 'production') {
    set('debug', true)
  }
  connect(dbConnection.url, dbConnection.options)
  .then(() => logger.info(`🎉 Mongo connected ${dbConnection.url}`))
  .catch((err) => logger.error(`MongoDB error connection: ${err}`))
  .then(()=>disconnect())

}
