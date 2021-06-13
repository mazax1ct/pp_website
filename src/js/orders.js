$(document).on('click', '.js-list-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.order').find('.order__dropdown').slideToggle();
  return false;
});
