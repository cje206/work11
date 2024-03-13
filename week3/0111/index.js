// 클래스 조작
function addClass() {
  $('#hi').addClass('font-size');
}
function removeClass() {
  // $('#hi').removeClass('color-blue');
  $('#hi').removeClass(); // 클래스 전체 삭제
}
function hasClass() {
  console.log($('#hi').hasClass('font-size'));
}
function toggleClass() {
  $('#hi').toggleClass('bg-color');
}

function switchClass() {
  $('#hi').switchClass('color-blue', 'color-red', 1000);
}
