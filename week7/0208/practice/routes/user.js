const express = require('express');
const controller = require('../controller/user');
const router = express();

router.post('/user', controller.user);
router.post('/join', controller.join);
router.get('/login', controller.login);
router.patch('/edit', controller.userEdit);
router.delete('/del', controller.userDel);

module.exports = router;
