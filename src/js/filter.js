$(document).on('click', '.js-filter-opener', function () {
    if($('body').width() < 1024) {
      $('body').css('overflow', 'hidden');
    }
    $('.filter').fadeIn();
    return false;
});

$(document).on('click', '.js-filter-closer', function () {
    $('.filter').fadeOut();
    $('body').css('overflow', '');
    return false;
});

$(document).on('click', '.js-section-toggler', function () {
    $(this).toggleClass('is-active');
    $(this).next('.filter__section-inner').slideToggle();
    return false;
});
