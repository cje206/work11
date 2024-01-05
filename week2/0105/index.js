/*
// 오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태
let cat = {
  // key: value 형태
  name: "고양이",
  age: 2,
  isCute: true,
  mew: function() {
    return "야옹!"
  }
};

console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

let people = {
  name: "홍길동",
  gender: "남자",
  address: "서울시 마포구",
  phone: " 010-2345-6789"
}
*/

/*
// typeof 데이터가 어떤 타입인지 알려주는 키워드
console.log(typeof "Hello");
console.log(typeof true);

const types = 20;
console.log(typeof types);
*/

/*
// 형변환: 데이터의 타입을 변환시켜주는 것
// prompt(): 사용자에게 데이터를 입력받게 하는 것
let mathScore = prompt("수학 점수를 입력하세요");
let engScore = prompt("영어 점수를 입력하세요");

// let avg = (mathScore + engScore) / 2;
// console.log(avg)
// console.log("안녕" + "하세요")

// 형변환 후
let avg = (Number(mathScore) + Number(engScore)) / 2;
console.log(avg);

// 문자형변환
let num = 123;
console.log(typeof num);

let a = String(num);
console.log(typeof a);

let b = num.toString();
console.log(typeof b);
*/

/*
// 연산자
console.log(1+1);
console.log(1-1);
console.log(1*5);
console.log(4/2);
console.log(100 % 2);
console.log(99 % 2);
console.log(2**4);

let num = 5;
num += 10 // num = num + 10 과 동일
console.log(num)

let result1, result2;
let nums1 = 10, nums2 = 15;

result1 = nums1++;
console.log(result1);
result1 = nums1++;
console.log(result1);

result2 = ++nums2;
console.log(result2);
result2 = ++nums2;
console.log(result2);
result2 = ++nums2;
console.log(result2);

// 비교연산자(일치연산자)
let a = 123;
let b = "123";

console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
*/
// 논리 연산자
// ||(or 연산자) : 둘 중 하나만 조건이 일치해도 통과
// &&(and 연산자) : 두 조건이 모두 일치해야 통과
// !(not 연산자) : 조건이 일치하지 않는 경우 통과
let name = "뽀로로";
let age = 18;
let isAdult = age > 19; // false

if(name === "뽀로로" && age > 19) {
  console.log("통과")
} else {
  console.log("돌아가")
}

if(!isAdult){ // isAdult가 false인가?
  console.log("통과")
} else {
  console.log("돌아가")
}