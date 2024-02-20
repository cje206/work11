const express = require('express');
const controller = require('../controller/post');
const middleWare = require('../middleware');

const router = express.Router();

//GET /all 전체글 조회
router.get('/all', middleWare.auth, controller.all);
//GET /post/:id 게시판글 하나 조회
router.get('/:id', middleWare.auth, controller.post);
//POST /write 게시판 글 하나 생성
router.post('/write', middleWare.auth, controller.write);
//PATCH /update 게시판 글 하나 수정
router.patch('/update', middleWare.auth, controller.update);
//DELETE /delete 게시판 글 하나 삭제
router.delete('/delete', middleWare.auth, controller.delete);
//POST /comment 댓글 생성
router.post('/comment', middleWare.auth, controller.comment);

module.exports = router;
