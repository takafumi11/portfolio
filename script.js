$(window).on('load scroll', function () {
  var elem = $('.animated');
  elem.each(function () {
    var isAnimate = $(this).data('animate');
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if (scrollPos > elemOffset - wh + (wh / 100)) {
      $(this).addClass(isAnimate);
    }
  });
});
$(function () {
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $('a[href^=#]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "skip" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
$(function () {
  $('#nav-toggle').on('click', function () {
    $('body').toggleClass('open');
  });
  $('#gloval-nav nav ul li a').on('click', function () {
    $('body').removeClass('open');
  });
});