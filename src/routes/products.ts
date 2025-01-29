import { createProduct, getAllProducts } from '@/controllers/productController.js'
import { Router } from 'express'

const productRouter = Router()

productRouter.get('/', getAllProducts)
productRouter.post('/', createProduct)

export { productRouter }
