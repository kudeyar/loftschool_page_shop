$(document).ready(function(){

    $('.content__product-slider-linkimg').on('click', function(e){
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

        display.find('img').fadeOut(duration, function(){
            $(this).attr('src', path).fadeIn(duration);
        })
    })





});