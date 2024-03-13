const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/exam1', (req, res) => {
    res.render('exam1');
});

app.get('/result1', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.get('/exam2', (req, res) => {
    res.render('exam2');
});

app.post('/login', (req, res) => {
    console.log(('요청값', req.body));
    const { inputId, inputPw } = req.body;
    const data = {
        inputId,
        inputPw,
        loginId: 'ididid',
        loginPw: 'pwpwpw',
    };
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
