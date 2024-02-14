exports.main = (req, res) => {
    res.render('index');
};

exports.join = (req, res) => {
    res.render('join');
};
exports.login = (req, res) => {
    res.render('login');
};
exports.edit = (req, res) => {
    res.render('edit');
};
exports.delete = (req, res) => {
    res.render('delete');
};
