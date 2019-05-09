$(function() {
  "use strict";

  const $menu = $('#menu'),
        $navBtn = $('#nav-btn'),
        duration = 350;
        var clickFlg = true;

  function toggleBtn(num) {
    $(`#nav-btn i:nth-of-type(${num})`).fadeToggle(duration);
  }
  $navBtn.click(function() {
    $menu.slideToggle(duration);
    toggleBtn(1);
    toggleBtn(2);
    // $('#nav-btn i:nth-of-type(1)').fadeToggle(duration);
    // $('#nav-btn i:nth-of-type(2)').fadeToggle(duration);
  });

  $(document).click(function() {
    $menu.slideUp(duration);
    if ($menu.is(':visible')) {
      if (clickFlg) {
        clickFlg = false;
        toggleBtn(1);
        toggleBtn(2);
        setTimeout(function() {
          clickFlg = true;
        }, duration * 2);
      } else {
        return false;
      }
    }
  });

  $($menu.add($navBtn)).click(function() {
    event.stopPropagation();
  });
  // $('#menu, #nav-btn').click(function() {
  //   event.stopPropagation();
  // });

  $(window).scroll(function () {
    $('.photo').each(function() {
      const pos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });
});
