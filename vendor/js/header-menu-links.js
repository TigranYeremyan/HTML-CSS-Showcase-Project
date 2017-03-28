$(document).ready(function () {
    $('.header-wrapper .hero-nav .menu-links li.menu-item').on('click', function () {
        $('li.menu-item').removeClass('active');
        $(this).addClass('active')
    })
});