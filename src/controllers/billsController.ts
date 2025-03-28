import { prisma } from '@/db/prisma.js'
import type { RequestHandler } from 'express'

export const createBill: RequestHandler = async (req, res) => {
  try {
    const { name, products } = req.body
    const newBill = await prisma.bill.create({
      data: {
        name,
        products: {
          create: products.map((productId: string) => ({
            product: { connect: { id: productId } },
          })),
        },
      },
      include: {
        products: { include: { product: true } },
      },
    })
    console.log('NewQuote', newBill)
    res.status(201).json(newBill)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
