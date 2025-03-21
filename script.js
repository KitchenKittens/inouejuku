document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')

    function navToggle() {
        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
        document.body.classList.toggle('no-scroll')
    }

    btn.addEventListener('click', navToggle)
});

/* Navbar固定 */
var _window = $(window), _nav = $('.navbar'), navBottom;

_window.on('scroll',function(){
    navBottom = $('.navbar').outerHeight()
    if(_window.scrollTop() > navBottom){
        _nav.addClass('fixed');
    }
    else{
        _nav.removeClass('fixed');
    }
});
_window.trigger('scroll');