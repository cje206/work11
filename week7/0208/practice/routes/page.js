const express = require('express');
const controller = require('../controller/Cpage');
const router = express.Router();

router.get('/', controller.main);
router.get('/login', controller.login);
router.get('/join', controller.join);
router.get('/edit', controller.edit);
router.get('/delete', controller.delete);

module.exports = router;
