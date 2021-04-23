jQuery(function ($) {
$('.js-accordion-title').on('click', function () {
  $(this).next().slideToggle(200);
  $(this).toggleClass('open', 200);
    });
});


/*-------------------------------------------
  スムーズスクロール
  ------------------------------------------*/
jQuery(function ($) {
    var topBtn = $('.back-to-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
