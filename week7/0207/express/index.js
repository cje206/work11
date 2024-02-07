require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 해당 폴더의 index.js는 생략가능
// const router = require('./routes/index');
// 위 아래 동일함
const router = require('./routes');
app.use('/', router);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

// 오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
