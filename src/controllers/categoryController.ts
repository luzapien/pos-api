import { prisma } from '@/db/prisma.js'
import type { RequestHandler } from 'express'

export const getAllCategories: RequestHandler = async (_req, res) => {
  try {
    const categories = await prisma.category.findMany()
    res.status(200).json(categories)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Failed to get all categories: ${error}` })
  }
}

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body
    const newCategory = await prisma.category.create({
      data: { name },
    })
    res.status(200).json(newCategory)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Failed to create category ${error}` })
  }
}

export const getCategoryById: RequestHandler = async (req, res) => {
  try {
    const categoryById = await prisma.category.findUnique({
      where: {
        id: req.params.id,
      },
    })
    if (!categoryById) {
      res.status(404).json({ error: 'Product not found' })
      return
    }
    res.status(200).json(categoryById)
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Failed to get category by id ${error}` })
  }
}

export const updateCategory: RequestHandler = async (req, res) => {
  try {
    const updateData = req.body
    const updatedCategory = await prisma.category.update({
      where: {
        id: req.params.id,
      },
      data: updateData,
    })
    res.status(200).json(updatedCategory)
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Failed to update category: ${error}` })
  }
}

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const categoryDeleted = await prisma.category.delete({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(`${categoryDeleted.name} deleted`)
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: `Failed to dete category ${error}` })
  }
}
