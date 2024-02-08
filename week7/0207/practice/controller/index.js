const User = require('../model/user');

exports.login = (req, res) => {
    res.render('login');
};

exports.result = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (User[0].userid === reqId && User[0].userpw === reqPw) {
        res.send({ result: true, userInfo: { id: User[0].userid } });
    } else {
        res.send({ result: false, userInfo: null });
    }
};
