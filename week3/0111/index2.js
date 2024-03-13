/*
// javascript
console.log(document);

// jquery
console.log($(document));
$(document).ready(function () {
  console.log('ready() - 문서의 DOM 트리가 완성되면 실행되는 이벤트');
});

$(function () {
  console.log('안녕');
});
*/

// click()
$('.hello').click(function () {
  $('.hello').css('color', 'red');
});

$('.nums').click(function () {
  // $('.nums').css('color', 'blue');
  // this는 자기자신 = 이벤트가 적용된 요소
  $('.nums').css('color', 'black');
  $(this).css('color', 'blue');
});

// mouseover() : 마우스 올렸을 때
$('.numbers').mouseover(function () {
  // $('.numbers').css('background', 'green');
  // $('.numbers').append('<li>.mouseover() call</li>');
  $(this).css('background', 'green');
});

// hover() : 마우스를 올렸을 때와 떼었을 때
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );
$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

// scroll()
// ex : 윈도우 창 스크롤 할 경우
$(window).scroll(function () {
  console.log('scroll');
});

// keydown()
$('.input-key').keydown(function (e) {
  if (e.code === 'ArrowUp') {
    console.log('up');
  } else if (e.code === 'ArrowDown') {
    console.log('down');
  } else {
    console.log(e.code);
  }
});
