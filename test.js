// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// Get the slide index
var slideIndex = 1;

// Display the current slide
function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Move to the next slide
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Move to the previous slide
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Open the modal
function openModal() {
  modal.style.display = "block";
  showSlide(slideIndex);
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

closeButton.addEventListener("click", function() {
  closeModal();
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    closeModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    prevSlide();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 39) {
    nextSlide();
  }
});
