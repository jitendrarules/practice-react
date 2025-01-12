const express = require('express');
const readController = require('../modules/reader.controller');

const router = express.Router();

router.get('/count', readController.getFiles);

module.exports = router;
