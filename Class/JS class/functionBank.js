
//LEFT AND RIGHT SCROLL BUTTON
    const imagejust = document.getElementById('imagejust');
    const scrollAmount = 300; // Adjust scroll amount per button click (in pixels)

    function scrollLeftt() {
    if (imagejust.scrollLeft <= 10) {
        imagejust.scrollTo({ left: 0, behavior: 'smooth' });
    } 
    else {
        imagejust.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    }

    function scrollRight() {
    //   where imagejust.scrollWidth is the total width of scrollable content.
    if (imagejust.scrollLeft + imagejust.clientWidth >= imagejust.scrollWidth - 10) 
        {
        imagejust.scrollTo({ left: 0, behavior: 'smooth' });//returns image to first one
    } else {
        imagejust.scrollBy({ left: scrollAmount, behavior: 'smooth' });//does the scrolling
    }
        // Attach to global scope if needed
    window.scrollLeftt = scrollLeftt;
    window.scrollRight = scrollRight;
    }


// SLIDING SLIDES
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let intervalTime = 1000; // 5 seconds,time intervals are specified in milliseconds
    let slideInterval;

    function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
    }

    function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
    }

    function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopSlideShow() {
    clearInterval(slideInterval);
    }

    dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopSlideShow();  // pause auto-slide on manual selection
        let index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
        startSlideShow(); // optionally resume auto-slide
    });
    });

    showSlide(0);
    startSlideShow();