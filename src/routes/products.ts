import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '@/controllers/productController.js'
import { Router } from 'express'

const productRouter = Router()

productRouter.get('/', getAllProducts)
productRouter.post('/', createProduct)
productRouter.get('/:id', getProductById)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export { productRouter }
