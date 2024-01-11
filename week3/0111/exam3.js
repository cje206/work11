$('td').on('click', function () {
  $('#date').val($(this).children('.calDate').text());
  $('#content').val($(this).children('.calContent').text());
  let selectDate = $(this);
});

$('.write').on('click', function () {
  let writeDate = $('.calDate').eq(Number($('#date').val()) - 1);
  let writeContent = $('#content').val();

  console.log(writeDate.next().hasClass('calContent'));
  if (writeDate.next().hasClass('calContent')) {
    writeDate.next().remove();
  }
  writeDate.after('<span class="calContent">' + writeContent + '</span>');
});
