import { createBill, getAllBills } from '@/controllers/billsController.js'
import { Router } from 'express'

const billRouter = Router()

billRouter.get('/', getAllBills)
billRouter.post('/', createBill)

export { billRouter }
