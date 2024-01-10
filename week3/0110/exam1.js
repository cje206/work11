$('#box').css('width', '500px');
$('.imgBox').css({
  width: '500px',
  height: '500px',
  'border-radius': '50px',
  border: '10px solid #f6db2e',
  'box-sizing': 'border-box',
  'font-size': '80px',
  'line-height': '150px',
  'text-align': 'center',
  'padding-top': '80px',
});
$('.btn').css({ display: 'flex', 'justify-content': 'center' });
$('button').css({ background: '#444', color: '#fff', margin: '0 5px', padding: '10px 8px', border: 'none' });
$('.imgBox').html('<span style="background: #fcff1d;">과일</span>을<br/>골라볼게요');
function apple() {
  $('.imgBox').css({
    background:
      "url('https://img.khan.co.kr/news/2023/09/27/l_2023092801001014200092871.webp') no-repeat center/contain",
    border: 'none',
  });
  $('.imgBox').html('');
}
function banana() {
  $('.imgBox').css({
    background:
      "url('https://health.chosun.com/site/data/img_dir/2022/05/04/2022050401754_0.jpg') no-repeat center/contain",
    border: 'none',
  });
  $('.imgBox').html('');
}
function grape() {
  $('.imgBox').css({
    background: "url('https://sitem.ssgcdn.com/93/59/26/item/1000523265993_i1_1100.jpg') no-repeat center/contain",
    border: 'none',
  });
  $('.imgBox').html('');
}
function peach() {
  $('.imgBox').css({
    background:
      "url('https://www.healthweek.co.kr/boardImage/healthweek/20200827/MC4xMjIyMTIwMCAxNTk4NTE2NjA5.jpeg') no-repeat center/contain",
    border: 'none',
  });
  $('.imgBox').html('');
}
