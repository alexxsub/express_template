import { Request, Response } from 'express'
import httpStatus from 'http-status'
import asyncHandler from '@utils/asyncHandler'

class APIController {
  public index = asyncHandler((req: Request, res: Response) => {

       res.status(httpStatus.OK).send('This is API')
  
})
}

export default APIController