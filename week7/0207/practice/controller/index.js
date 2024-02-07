const user = require('../model/user');

exports.login = (req, res) => {
    res.render('login');
};

exports.result = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (user.id === reqId && user.pw === reqPw) {
        res.send({ result: true, userInfo: { id: user.id } });
    } else {
        res.send({ result: false, userInfo: null });
    }
};
