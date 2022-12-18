const btn = document.getElementById('menu-btn')

const nav = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

/* Navbar固定 */
var _window = $(window), _nav = $('.navbar'), navBottom;

_window.on('scroll',function(){
    navBottom = $('.navbar').outerHeight() + 60;
    if(_window.scrollTop() > navBottom){
        _nav.addClass('fixed');
    }
    else{
        _nav.removeClass('fixed');
    }
});
_window.trigger('scroll');

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    $("body").addClass("modal-open");
}
  
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    $("body").removeClass("modal-open");
}
  
var slideIndex = 1;
showSlides(slideIndex);
  
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}