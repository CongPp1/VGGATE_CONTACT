const express = require('express');
const router = express.Router();

const submitRoute = require('./APIs/submit-route.js');
const uploadRoute = require('./APIs/upload-route.js');

router.use('/submit', submitRoute);
router.use('/upload', uploadRoute);

module.exports = router;