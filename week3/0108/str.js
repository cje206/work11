let str = 'Happy day~!     ';
/*
console.log(str.length); //빈 문자 포함한 문자열 길이
console.log(str.toUpperCase()); //대문자로 변환
console.log(str.toLowerCase()); //소문자로 변환
//toUpperCase()나 toLowerCase()는 보통 회원가입 시 아이디 중복을 막기 위해 자주 사용

console.log(str.indexOf('y')); // 몇 번째 인덱스인지 확인(단, 첫 번째 문자만 검색)
console.log(str.slice(2)); // 글자 자르기
console.log(str.slice(2, -7)); // 음수일 때는 뒤에서부터

console.log(str.replace('a', 's')); // 문자 변경 (단, 첫 번째 문자만 변경)
console.log(str.replaceAll('y', 'i')); // 전체 문자 변경
console.log(str.repeat(5)); // 문자열 반복
console.log(str.trim());

console.log(str.split('')); // 문자열 자르기

// 메소드 체이닝
console.log(str.trim().toLowerCase().split('p'));
*/

let hello = 'Hello~';
let helloSplit = hello.split('');
console.log(helloSplit);

let reverseHello = helloSplit.reverse();
console.log(reverseHello);

let helloJoin = reverseHello.join('');
console.log(helloJoin);

console.log(hello.split('').reverse().join(''));

const colors = ['red', 'orange', 'yellow'];
console.log(colors.join('&&')); // join()안에 있는 문자를 기준으로 병합
