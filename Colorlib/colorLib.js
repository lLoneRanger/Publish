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
}

window.addEventListener('load', () => {
  document.getElementById('image').classList.add('slide-in');
});

