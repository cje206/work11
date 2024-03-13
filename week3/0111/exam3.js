// $('td').on('click', function () {
//   $('#date').val($(this).children('.calDate').text());
//   $('#content').val($(this).children('.calContent').text());
// });

// $('.write').on('click', function () {
//   let writeDate = $('.calDate').eq(Number($('#date').val()) - 1);
//   let writeContent = $('#content').val();

//   console.log(writeDate.next().hasClass('calContent'));
//   if (writeDate.next().hasClass('calContent')) {
//     writeDate.next().remove();
//   }
//   writeDate.after('<span class="calContent">' + writeContent + '</span>');
// });

$('.calDate').on('click', function () {
  $('#date').val($(this).text());

  target = this;
});

function writeSchedule() {
  let content = $('#content').val();

  $(target).parent().append(`<span>${content}</span>`);
  $('#content').val('');
  $('#date').val('');
}
