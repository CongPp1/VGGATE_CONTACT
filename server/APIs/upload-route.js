const express = require('express');
const router = express.Router();

const uploadController = require('./upload-controller.js');

router.post('/uploadImages', uploadController.uploadController);
router.get('/getImages', uploadController.getFiles);

module.exports = router;