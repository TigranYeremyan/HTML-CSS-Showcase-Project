$(document).ready(function () {
    $('.footer-wrapper .divider ul.social-icons li a i').on('click', function () {
        $('i').removeClass('active');
        $(this).addClass('active')
    })
});
