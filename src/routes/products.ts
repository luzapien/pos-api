import { Router } from 'express'

const productRouter = Router()

productRouter.get('/', (_req, res) => {
  res.send('This is the product route')
})

export { productRouter }
