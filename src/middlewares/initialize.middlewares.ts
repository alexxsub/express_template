import config from 'config'
import path from 'path'
import express from 'express'
// middlewares modules
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import nocache from 'nocache'
import favicon  from  'serve-favicon'
import errorMiddleware from '@middlewares/error.middleware'

import { errorLog, successLog } from '@/middlewares/morgan.middleware'

const initializeMiddlewares =  function(app:express.Application) {
    
 
  

    /*
    // variant 1 
      this.app.use(morgan(config.get('log.format')))//HTTP request logger
    // variant 2
      this.app.use(morgan(function (tokens, req, res) { // custom HTTP request logger
      return [
        tokens.date(req, res, 'clf'),
        tokens['remote-addr'](req, res),
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
      ].join(' ')
    }))
    app.use(function (req, res, next) {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
      res.header('Expires', '-1')
      res.header('Pragma', 'no-cache')
      next()
     }) */
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
    
    app.use(nocache())
    app.use(express.static(path.join(__dirname, '../../public')))
    app.use(favicon(path.join(__dirname,'../../public','images','favicon.png')))
    app.use(cors({ origin: config.get('cors.origin'), credentials: config.get('cors.credentials') }))//for Cross-origin resource sharing
    app.use(hpp()) // to protect against HTTP Parameter Pollution attacks
    app.use(helmet())// helps you secure your Express apps by setting various HTTP headers
    app.use(compression()) // to compress
    app.use(express.json())// for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    app.use(cookieParser())//Parse Cookie header and populate req.cookies with an object keyed by the cookie names
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(errorMiddleware)
    app.use(successLog) // morgan success logger
    app.use(errorLog) // morgan error logger
    
 
  }

export default initializeMiddlewares
