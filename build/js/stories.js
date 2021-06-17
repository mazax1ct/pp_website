$(document).on('click', '.stories-circle', function () {
  $('.stories-modal').fadeIn();
  videoSlider.update();
  productsSlider.update();
  return false;
});


$(document).on('click', '.js-stories-close', function () {
  $('.stories-modal').fadeOut();
  $('.stories-modal__products').removeClass('is-open');
  return false;
});

$(document).on('click', '.js-products-opener', function () {
  $('.stories-modal__products').addClass('is-open');
  return false;
});

$(document).on('click', '.js-products-closer', function () {
  $('.stories-modal__products').removeClass('is-open');
  return false;
});
