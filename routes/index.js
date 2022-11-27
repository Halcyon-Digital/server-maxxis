const router = require('express').Router();
// const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
// const orderRoutes = require('./orderRoutes');
// const bannerRoutes = require('./bannerRoutes');
// const tireRoutes = require('./tireRoutes');
// const blogRoutes = require('./blogRoutes');
// const dealerRoutes = require('./dealerRoutes');
// const arrivalRoutes = require('./arrivalRoutes');
// const contactRoutes = require('./contactRoutes');
// const galleryRoutes = require('./galleryRoutes');
// const categoryRoutes = require('./categoryRoutes');
// const tireSizeRoutes = require('./tireSizeRoutes');

// router.use('/api/v1/arrivals', arrivalRoutes);
// router.use('/api/v1/auth', authRoutes);
// router.use('/api/v1/blogs', blogRoutes);
// router.use('/api/v1/banners', bannerRoutes);
// router.use('/api/v1/contact', contactRoutes);
// router.use('/api/v1/category', categoryRoutes);
// router.use('/api/v1/dealer', dealerRoutes);
// router.use('/api/v1/gallery', galleryRoutes);
// router.use('/api/v1/orders', orderRoutes);
router.use('/api/v1/products', productRoutes);
// router.use('/api/v1/tires', tireRoutes);
// router.use('/api/v1/size', tireSizeRoutes);

module.exports = router;
