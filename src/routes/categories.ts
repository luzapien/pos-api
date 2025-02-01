import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from '@/controllers/categoryController.js'
import { Router } from 'express'

const categoryRouter = Router()

categoryRouter.get('/', getAllCategories)
categoryRouter.post('/', createCategory)
categoryRouter.get('/:id', getCategoryById)
categoryRouter.put('/:id', updateCategory)
categoryRouter.delete('/:id', deleteCategory)

export { categoryRouter }
