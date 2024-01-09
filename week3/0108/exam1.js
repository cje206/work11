let numbers = [];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

// 1~100 배열 만들기
for (let i = 0; i < 100; i++) {
  numbers.push(i + 1);
}
console.log(numbers);

// 배열의 합(for문)
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}
console.log(sum1);

// 배열의 합(for of문)
for (let number of numbers) {
  sum2 += number;
}
console.log(sum2);

// 배열의 합(forEach문)
numbers.forEach((number) => {
  sum3 += number;
});
console.log(sum3);
