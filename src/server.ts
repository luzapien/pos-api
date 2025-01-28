import express from 'express'
import { productRouter } from '@/routes/products'
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>')
})

const port = process.env.PORT || 3000
app.use('/products', productRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
