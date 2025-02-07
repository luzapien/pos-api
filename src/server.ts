import { categoryRouter } from './routes/categories.js'
import { productRouter } from '@/routes/products.js'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>')
})

const port = process.env.PORT || 3000

app.use('/products', productRouter)
app.use('/categories', categoryRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
