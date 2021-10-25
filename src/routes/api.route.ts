import { Router } from 'express'
import { Routes } from '@interfaces/routes.interface'
import APIController from '@controllers/api.controller'



class APIRoute implements Routes {
  public path = '/'
  public url = '/api'
  public router = Router()
  public apiController = new APIController()

  constructor() {
    this.router.get(`${this.path}`, this.apiController.index)
  }


}


export default APIRoute
