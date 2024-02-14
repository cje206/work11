const mysql = require('mysql2/promise');
const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'newkdt',
        password: '1234',
        database: 'kdt11',
        port: 3306,
    });
};

const user = async (userid) => {
    const conn = await getConn();
    const query = 'SELECT * FROM user WHERE userid=?';
    const [result] = await conn.query(query, [userid]);
    await conn.end();
    return result;
};

const join = async (data) => {
    const conn = await getConn();
    const query = 'INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)';
    const [result] = await conn.query(query, [data.userid, data.name, data.pw]);
    await conn.end();
    return result;
};

const login = async () => {
    const conn = await getConn();
    const query = 'SELECT * FROM user';
    const [rows] = await conn.query(query);
    await conn.end();
    return rows;
};

const userEdit = async (data) => {
    const conn = await getConn();
    const query = 'UPDATE user SET name=?, pw=? WHERE userid=?';
    const [result] = await conn.query(query, [data.name, data.pw, data.userid]);
    await conn.end();
    return result;
};
const userDel = async (userid) => {
    const conn = await getConn();
    const query = 'DELETE FROM user WHERE userid=?';
    const [result] = await conn.query(query, [userid]);
    await conn.end();
    return result;
};

module.exports = { user, join, login, userEdit, userDel };
