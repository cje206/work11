function calculate() {
  let val1 = Number(document.getElementById('value1').value);
  let val2 = Number(document.getElementById('value2').value);
  let op = document.getElementById('op').value;
  let result = document.getElementById('result');

  if (op === '+') {
    result.value = val1 + val2;
  } else if (op === '-') {
    result.value = val1 - val2;
  } else if (op === '/') {
    result.value = val1 / val2;
  } else if (op === '*') {
    result.value = val1 * val2;
  } else {
    result.value = '다시 입력해주세요.';
  }
}

function reset() {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  document.getElementById('op').value = '';
  document.getElementById('result').value = '';
}
