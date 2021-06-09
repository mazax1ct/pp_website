//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 0) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }

  if($(window).scrollTop() > h.height()) {
    h.addClass("half-scrolled");
  } else {
    h.removeClass("half-scrolled");
  }

  if($(window).scrollTop() > h.height()*2) {
    h.addClass("full-scrolled");
  } else {
    h.removeClass("full-scrolled");
  }
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//главное меню
$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass('is-active');

  if($(this).hasClass('is-active')) {
    $('body').addClass('menu-open');
    $('.header__menu').fadeIn();
  } else {
    $('body').removeClass('menu-open');
    $('.header__menu').fadeOut();
  }

  return false;
});

function closeSearch(evt) {
  if (!$('.header__search').is(evt.target) && $('.header__search').has(evt.target).length === 0) {
    $('.header__search').removeClass('is-open');
    $('.js-search-toggler').removeClass('is-active');
    document.removeEventListener('click', closeSearch);
	}
}

//открытие/закрытие поиска
$(document).on('click', '.js-search-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $('.header__search').addClass('is-open');
    setTimeout(function() {
      $('.header__search-input').focus();
    }, 100);
    document.addEventListener('click', closeSearch);
  } else {
    $(this).removeClass('is-active');
    $('.header__search').removeClass('is-open');
    document.removeEventListener('click', closeSearch);
  }
  return false;
});
