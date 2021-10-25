import request from 'supertest'
import App from '@/app'
import APIRoute from '@routes/api.route'
import IndexRoute from '@routes/index.route'


afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500))
})

describe('Testing API', () => {
  describe('[GET] /api', () => {
    it('response statusCode 200', () => {
      const apiRoute = new APIRoute()
      const indexRoute = new IndexRoute()
      const app = new App([indexRoute,apiRoute])

      return request(app.getServer()).get(`${apiRoute.path}`).expect(200)
    })
  })
})