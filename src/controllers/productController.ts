import { prisma } from '@/db/prisma.js'
import type { RequestHandler } from 'express'

export const getAllProducts: RequestHandler = async (_req, res) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch products' })
  }
}

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const { name, category_id, packaging } = req.body
    const newProduct = await prisma.product.create({
      data: { name, category_id, packaging },
    })
    res.status(200).json(newProduct)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create product' })
  }
}

export const getProductById: RequestHandler = async (req, res) => {
  try {
    const productById = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      },
    })
    if (!productById) {
      res.status(404).json({ error: 'Product not found' })
      return
    }
    res.status(200).json(productById)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch product by Id' })
  }
}

export const updateProduct: RequestHandler = async (req, res) => {
  try {
    const updateData = req.body
    const updatedProduct = await prisma.product.update({
      where: {
        id: req.params.id,
      },
      data: updateData,
    })
    res.status(200).json(updatedProduct)
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to update product' })
  }
}

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const deleteProduct = await prisma.product.delete({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(`${deleteProduct.name} deleted`)
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to delete product' })
  }
}
