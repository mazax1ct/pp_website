$(document).on('click', '.tabs-nav__link', function () {
    $('.tabs-nav__link').removeClass('is-active');
    $(this).addClass('is-active');

    $(this).closest('.tabs').find('.tab').removeClass('is-active');
    $('.tab[data-target="'+$(this).attr('data-href')+'"]').addClass('is-active');

    return false;
});
