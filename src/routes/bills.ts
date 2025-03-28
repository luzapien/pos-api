import { createBill } from '@/controllers/billsController.js'
import { Router } from 'express'

const billRouter = Router()

billRouter.post('/', createBill)

export { billRouter }
