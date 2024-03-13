const express = require('express');
const aws = require('aws-sdk'); // aws 설정을 위한 모듈
const multer = require('multer');
const multers3 = require('multer-s3'); // aws s3에 파일 업로드 하기 위한 multer 설정
const app = express();
const PORT = 8000;

// aws 설정
aws.config.update({
  region: 'ap-northeast-2',
});

// aws s3 인스턴스 생성
const s3 = new aws.S3();

// multer 설정
const upload = multer({
  storage: multers3({
    s3, // s3: s3
    bucket: 'kdt11-cje',
    acl: 'public-read', // 파일 접근 권한(public-read로 해야 업로드 된 파일이 공개)
    metadata: function (req, file, cb) {
      cb(null, { fieldname: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
// 페이지
app.get('/', (req, res) => {
  res.render('index');
});
// api
app.post('/upload', upload.array('files'), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
