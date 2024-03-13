const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded 방식
app.use(express.json()); // json방식

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// router
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/getForm', (req, res) => {
    // get방식일때
    console.log(req.query);
    res.render('result', { title: 'GET요청 결과', userInfo: req.query });
});

app.post('/postForm', (req, res) => {
    // post방식일때
    console.log(req.body);
    res.render('result', { title: 'POST요청 결과', userInfo: req.body });
});

app.get('/exam', (req, res) => {
    res.render('exam');
});

app.get('/resultGet', (req, res) => {
    console.log(req.query);
    // 구조분해할당
    const { name, gender, birthYear, birthMonth, birthDate, favoriteColor, favoriteNumber, myEmail } = req.query;
    res.render('resultGet', {
        title: 'GET요청',
        // key-value형태에서 key값과 value의 변수가 동일할 때는 value값 생략 가능
        userInfo: { name, gender, birthYear, birthMonth, birthDate, favoriteColor, favoriteNumber, myEmail },
    });
});

app.get('/exam2', (req, res) => {
    res.render('exam2');
});

app.post('/resultPost', (req, res) => {
    console.log(req.body);
    const { name, gender, birthYear, birthMonth, birthDate, favoriteColor, favoriteNumber, myEmail } = req.body;
    res.render('resultPost', {
        title: 'POST요청',
        userInfo: { name, gender, birthYear, birthMonth, birthDate, favoriteColor, favoriteNumber, myEmail },
    });
});

// 전체 전송방식에서 오류 페이지 연결하기
// use는 http 전송 방식을 이해하지 못함
// 같은 router(url)로 get, post를 만들 수 있지만, use로는 접근이 불가
// 예를 들어 get방식의 '/login'과 post방식의 '/login'은 다른 통신이지만 use는 동일한 페이지로 인식
// use는 404 페이지일 때 주로 사용
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
