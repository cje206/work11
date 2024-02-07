require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// 임시 db
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comment: '안녕하세요.',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2024-02-03',
        comment: '반갑습니다.',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2024-02-05',
        comment: '행복하세요.',
    },
    {
        id: 4,
        userid: 'fail',
        date: '2024-02-07',
        comment: '축구망했다.',
    },
];

// router
app.get('/', (req, res) => {
    res.render('index');
    // console.log('hi');
    // console.log(process.env.NODE);
    // console.log(process.env.NAME);
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === 'production') {
    //     console.log('라이브 서버입니다.');
    // } else if (process.env.NODE_ENV === 'development') {
    //     console.log('개발용 서버입니다.');
    // }
});

app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});

// :page는 { page: "값" } 형태, :이 붙고 안붙고의 차이가 큼
app.get('/comment/:page', (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    // comments 배열 요소에 접근 => 즉, 객체 하나
    res.render('comment', { data: comments[page - 1] });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
