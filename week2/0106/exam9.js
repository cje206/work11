let number = 1;
let sum = 0;

while (number < 100) {
  if (number % 2 == 0 || number % 3 == 0) {
    sum += number;
  }
  number++;
}
console.log(sum);

let sum2 = 0;
for (let i = 1; i < 100; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    sum2 += i;
  }
}
console.log(sum2);
