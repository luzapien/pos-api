import { productRouter } from '@/routes/products.js'
import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>')
})

const port = process.env.PORT || 3000
app.use('/products', productRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
