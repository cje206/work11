const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + ext;
            done(null, newName);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
    res.render('exam');
});

app.post('/upload', upload.single('userfile'), (req, res) => {
    const { userid, userpw, username, userage } = req.body;
    const image = req.file.path;
    res.render('result', { userid, userpw, username, userage, image });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
