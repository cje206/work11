/*
// 함수
// 함수 선언문(기본적인 형태)
function sayHello() {
  console.log("지역 Hello");
};

console.log("전역 Hello");

sayHello();

// ///////////////////////////////////함수 선언문////////////////////////////////////////////
// 덧셈 기능이 있는 함수를 선언
sumFunc(15, 10); // 호이스팅
const num1 = 10; // 전역 변수
function sumFunc(num2, num3) { // 여기서 ()안의 변수 num2는 매개변수
  const num1 = 11;
  const sum = num1 + num2 + num3;
  // console.log("지역",num1);
  console.log("결과",sum);
  // return : 함수 제일 마지막에 사용, 값을 다시 전달
  return sum;
}

// console.log("전역",num1);

sumFunc(60, 10); // ()안의 값은 인자

let result = sumFunc(30, 20);
console.log(result);
*/



////////////////////////// 함수표현식 ///////////////////////////
// sayHello(); // 함수표현식은 호이스팅 불가
// let sayHello = function() {
//   console.log("Hello")
// }
let sayHello = (num) => {
  console.log(num);
  console.log("Hello");
  return num + 10;
};
// sayHello(20);
let result = sayHello(30);
console.log(result);