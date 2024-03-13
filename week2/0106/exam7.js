let num = Number(prompt('숫자를 입력하세요.'));

for (let i = 1; i <= num; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}
