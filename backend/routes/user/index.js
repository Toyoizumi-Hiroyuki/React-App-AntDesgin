const express = require('express');

const router = express.Router();

router.post('/login', require('./login'));
router.post('/info', require('./info'));

module.exports = router;
