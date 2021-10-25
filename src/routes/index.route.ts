import { Router } from 'express'
import { Routes } from '@interfaces/routes.interface'
import IndexController from '@controllers/index.controller'



class IndexRoute implements Routes {
  public path = '/'
  public url = '/'
  public router = Router()
  public indexController = new IndexController()

  constructor() {
    this.router.get(`${this.path}`, this.indexController.index)
  }

 
}


export default IndexRoute
