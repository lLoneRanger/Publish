// Nav and Sidebar
function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display ='flex'
      }

function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display ='none' 
      }

function aboutus() {
      const aboutus = document.querySelector('.about-us');
      if (aboutus.style.display === 'block') {
        aboutus.style.display = 'none';
      } else {
        aboutus.style.display = 'block';
      }
}

function aboutus2() {
      const aboutus2 = document.querySelector('.about-us2');
      if (aboutus2.style.display === 'block') {
        aboutus2.style.display = 'none';
      } else {
        aboutus2.style.display = 'block';
      }
      if(aboutus2===``)
      {
        aboutus2.style.display = 'none';
      }
}

window.addEventListener('load', () => {
document.getElementById('image').classList.add('slide-in');
});


/*Section 9*/
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let intervalTime = 3000; // 5 seconds,time intervals are specified in milliseconds
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