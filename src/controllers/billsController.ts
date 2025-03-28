import { prisma } from '@/db/prisma.js'
import type { RequestHandler } from 'express'

export const getAllBills: RequestHandler = async (_req, res) => {
  try {
    const bills = await prisma.bill.findMany({
      include: {
        products: { include: { product: true } },
      },
    })
    res.status(200).json(bills)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const createBill: RequestHandler = async (req, res) => {
  try {
    const { name, products } = req.body

    const productData = await prisma.product.findMany({
      where: { id: { in: products } },
      select: { price: true },
    })
    let sum = 0

    for (let i = 0; i < productData.length; i++) {
      const productPrice = productData[i].price
      sum += productPrice
    }

    await prisma.bill.create({
      data: {
        name,
        products: {
          create: products.map((productId: string) => ({
            product: { connect: { id: productId } },
          })),
        },
        total: sum,
      },
      include: {
        products: { include: { product: true } },
      },
    })
    res.status(201).json({ message: 'Bill registered succesfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
