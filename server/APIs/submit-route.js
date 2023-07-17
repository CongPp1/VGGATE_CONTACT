const express = require('express');
const router = express.Router();
const submitController = require('./submit-controller.js');

router.post('/add', submitController.addSubmit);

module.exports = router;