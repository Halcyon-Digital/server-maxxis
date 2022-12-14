const router = require('express').Router();

router.use(require('../routes/index'));

router.get('/', (_req, res) => {
  res.status(200).json({ message: 'Server Running' });
});

router.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Success' });
});

module.exports = router;
