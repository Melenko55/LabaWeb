$(() => {
    //modal
    $('#contact').click(function (e) {
        $('#modal').toggleClass('hide')
        $('body').css('overflow', 'hidden');

    })

    $('#modal').submit(function (e) {
        e.preventDefault()
        $('.thanks').toggleClass('hide')
        $('.modal__content').toggleClass('hide')
        setTimeout(() => {
            $('.thanks').toggleClass('hide')
            $('.modal__content').toggleClass('hide')
            $('body').css('overflow', 'auto');
            $(this).toggleClass('hide')
        }, 3000);
    });

    $('#modal__content-close').click(function (e) {
        e.preventDefault()
        $('body').css('overflow', 'auto');
        $('#modal').toggleClass('hide')
    })

    //slider 
    let current = 0
    const slides = $('.slider__item')
    let prev = $('.arrow-left')
    let next = $('.arrow-right')

    prev.click(function (e) {
        current--
        if (current < 0) {
            current = slides.length - 1
        }
        slides.addClass('hide')
        slides.eq(current).removeClass('hide')
    })

    next.click(function (e) {
        current++
        if (current > slides.length - 1) {
            current = 0
        }
        slides.addClass('hide')
        slides.eq(current).removeClass('hide')
    })
})