//For scrolling Images
const imagejust = document.getElementById('imagejust');
const scrollAmount = 300; // Adjust scroll amount per button click (in pixels)

function scrollLeft() {
  if (imagejust.scrollLeft <= 10) {
    imagejust.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    imagejust.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

function scrollRight() {
  if (imagejust.scrollLeft + imagejust.clientWidth >= imagejust.scrollWidth - 10) 
    {
    imagejust.scrollTo({ left: 0, behavior: 'smooth' });//returns image to first one
  } else {
    imagejust.scrollBy({ left: scrollAmount, behavior: 'smooth' });//does the scrolling
  }

    // Attach to global scope if needed
  window.scrollLeft = scrollLeft;
  window.scrollRight = scrollRight;
}

 