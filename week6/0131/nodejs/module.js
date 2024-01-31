// const a = 10;
// const b = 20;

// // 하나의 모듈 파일에 하나의 모듈 만들기
// function connect() {
//     // ~~~~~ 로직
//     return a + b;
// }

// module.exports = connect;

// 하나의 모듈 파일에 여러 개 모듈 만들기
const a = 'a 변수';
const b = 'b 변수';
const c = 20;

module.exports = { a, b, c };
