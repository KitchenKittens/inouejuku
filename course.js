
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

// Open description modals
function openTextModal(descId) {
    let descElement = document.getElementById(descId);
    if (descElement) {
        let descText = descElement.innerHTML; // Get the HTML content (not just the text)
        document.getElementById("modalText").innerHTML = descText; // Set the HTML content to the modal
        document.getElementById("textModal").style.display = "flex";
    } else {
        console.error("Description element not found:", descId);
    }
}

function closeTextModal() {
    document.getElementById("textModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    let textModal = document.getElementById("textModal");
    if (event.target === textModal) {
        closeTextModal();
    }
}