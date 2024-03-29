const express = require('express');
const controller = require('../controller');
const router = express.Router();

router.get('/', controller.login);

router.post('/login', controller.result);

module.exports = router;
