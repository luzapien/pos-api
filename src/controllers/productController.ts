import { prisma } from '@/db/prisma.js'

export const getAllProducts = async (_req, res) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
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

export const getProductById = async (req, res) => {
  try {
    const productId = Number.parseInt(req.params.id, 10)

    if (Number.isNaN(productId)) {
      return res.status(400).json({ error: 'Invalid product ID' })
    }
    const productById = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    })
    if (!productById) {
      return res.status(404).json({ error: 'Product not found' })
    }
    return res.status(200).json(productById)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch product by Id' })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const productId = Number.parseInt(req.params.id, 10)
    const updateData = req.body
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: updateData,
    })
    console.log('UPDATED', updatedProduct)
    return res.status(200).json(updatedProduct)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to update product' })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const productId = Number.parseInt(req.params.id, 10)
    const deleteProduct = await prisma.product.delete({
      where: {
        id: productId,
      },
    })
    return res.status(200).json(` ${deleteProduct.name} deleted`)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to delete product' })
  }
}
