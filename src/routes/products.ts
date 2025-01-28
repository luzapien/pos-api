import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the product route')
});

export default router;
