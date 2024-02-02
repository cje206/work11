const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// router
// ===페이지
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/submit', (req, res) => {
    res.render('submit');
});
app.get('/func', (req, res) => {
    res.render('func');
});
/**
 * render(): 뷰 페이지 렌더링, render(뷰페이지이름, 데이터(선택))
 * send(): 모든 타입 데이터 전송
 */

// ===요청과 응답
// ajax
app.get('/ajax', (req, res) => {
    console.log('요청값', req.query);
    const { name, email } = req.query;
    // 프론트로 보내는 데이터
    res.send({ user: `${name}님`, address: `주소: ${email}` });
});
app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const { name, email } = req.body;
    res.send({ username: name, email });
});
// axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});
app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다.`,
    };
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
