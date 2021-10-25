import { Router } from 'express'

export interface Routes {
  path?: string
  url?: string
  router: Router
}
