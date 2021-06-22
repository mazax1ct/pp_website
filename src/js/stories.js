setInterval(calcPaths, 9500);

function calcPaths(totalDur) {
  // unset 'animated' class to body which will reset the animation
  document.body.classList.remove('animated');

  // get all SVG elements - lines and dots
  const paths = document.querySelectorAll('.magic-line');
  // prepare path length variable
  let len = 0;
  // prepare animation delay length variable
  let delay = 3;

  // escape if no elements found
  if (!paths.length) {
    return false;
  }

  // set duration in seconds of animation to default if not set
  const totalDuration = totalDur || 5

  // calculate the full path length
  paths.forEach((path) => {
    const totalLen = path.getTotalLength();
    len += totalLen;
  })

  paths.forEach((path) => {
    const pathElem = path;
    // get current path length
    const totalLen = path.getTotalLength();
    // calculate current animation duration
    const duration = totalLen / len * totalDuration;

    // set animation duration and delay
    pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`;
    pathElem.style.animationDelay = `${delay}s`;

    // set dash array and offset to path length - this is how you hide the line
    pathElem.setAttribute('stroke-dasharray', totalLen);
    pathElem.setAttribute('stroke-dashoffset', totalLen);

    // set delay for the next path - added .2 seconds to make it more realistic
    delay += duration + 0.2;
  });

  // set 'animated' class to body which will start the animation
  document.body.classList.add('animated');

  return true;
}

$(document).on('click', '.stories-circle', function () {
  $('.stories-modal').fadeIn();
  videoSlider.update();
  productsSlider.update();
  calcPaths();
  return false;
});


$(document).on('click', '.js-stories-close', function () {
  $('.stories-modal').fadeOut();
  $('.stories-modal__products').removeClass('is-open');
  document.body.classList.remove('animated');
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
