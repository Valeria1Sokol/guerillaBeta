$('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
    $('.num').toggleClass('fadeRight');
    $('.name').toggleClass('fadeLeft');
    $('.navBarImg').toggleClass('zoomIn');
});
