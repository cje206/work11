// 1970년 1월 1일 0시를 기준으로 시작(UTC)
// ex) 대한민국 UTC + 9
console.log(new Date(2024, 1));
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate()); // 날짜
console.log(date.getDay()); // 요일 / 0,7 = 일요일/ 1 = 월요일
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(
  `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}:${date.getSeconds()}:${date.getMilliseconds()}`
);

// Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));
console.log(Math.random()); // 0~1사이의 난수
console.log(Math.round(1.5)); // 반올림
console.log(Math.floor(1.5)); // 버림
console.log(Math.ceil(1.4)); // 올림
console.log(Math.abs(10 - 28));
console.log(Math.cbrt(2)); // 세제곱근을 반환
