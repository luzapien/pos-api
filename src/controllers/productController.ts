import { prisma } from '@/db/prisma.js'

export const getAllProducts = async (_req, res) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
    console.log('PRODUCTOS', products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch products' })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, category_id, packaging } = req.body
    const newProduct = await prisma.product.create({
      data: { name, category_id, packaging },
    })
    res.status(200).json(newProduct)
    console.log(newProduct)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create product' })
  }
}
