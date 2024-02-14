const User = require('../model/User');

const user = async (req, res) => {
    const data = await User.user(req.body.userid);
    console.log(req.body.userid);
    res.json({ result: data.length === 1, user: data });
};
const join = async (req, res) => {
    const data = await User.join(req.body);
    res.json({ result: true, userid: req.body.userid, name: req.body.name, pw: req.body.pw });
};
const login = async (req, res) => {
    const data = await User.login();
    console.log(data);
    res.json({ user: data });
};
const userEdit = async (req, res) => {
    await User.userEdit(req.body);
    res.json({ result: true });
};
const userDel = async (req, res) => {
    await User.userDel(req.body.userid);
    res.json({ result: true });
};

module.exports = { user, join, login, userEdit, userDel };
