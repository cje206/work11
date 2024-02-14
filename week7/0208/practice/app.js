const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

const pageRouter = require('./routes/page');
app.use('/', pageRouter);

const userRouter = require('./routes/user');
app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
