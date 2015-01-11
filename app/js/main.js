$(document).ready(function () {
/*slideshow*/
    $('.content__product-slider-linkimg').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.content__product-slider-list-item'),
            container = $this.closest('.content__product-slider'),
            display = container.find('.content__product-slider-display'),
            path = item.find('img').attr('src'),
            duration = 300;

        if (!item.hasClass('img_active')) {
            item.addClass('img_active').siblings().removeClass('img_active');
        }

        display.find('img').fadeOut(duration, function () {
            $(this).attr('src', path).fadeIn(duration);
        })
    })
/*dropdown menu*/
    $('.header__bottom-menu-basket').hover(function() {
            $(this).addClass("active");
            $(this).find('.header__bottom-menu-dropdownmenu').stop(true, true); // останавливаем всю текущую анимацию
            $(this).find('.header__bottom-menu-dropdownmenu').slideDown();
        },
        function() {
            $(this).removeClass("active");
            $(this).find('.header__bottom-menu-dropdownmenu').slideUp('fast');
        });

    /*slider*/

    if ($('.content__product-slider-list').length) {
        $('.content__product-slider-list').bxSlider({
            slideWidth: 77,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 10,
            pager: false,
            nextText: '>',
            prevText: '<'

        });
    }

});