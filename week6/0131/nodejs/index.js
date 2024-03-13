// const connect = require('./module.js');
// console.log(connect);
// const { a, b, c } = require('./module.js');
// console.log(a, b, c);

const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    // res.writeHead(201);
    // res.write('<h1>Hello Nodejs</h1>');
    // res.end('<p>End</p>');

    // 파일 전송
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

// server.on('request', function () {
//     console.log('요청 이벤트');
// });

// server.on('connection', function () {
//     console.log('접속 이벤트');
// });

// listen: 서버를 실행한다
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});
