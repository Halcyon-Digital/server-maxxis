const router = require('express').Router();
const productRoutes = require('./productRoutes');

router.use('/api/v1/products', productRoutes);

module.exports = router;
