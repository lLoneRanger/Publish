    //Hides the menu when clicking the hamburger icon
    function toggleMenu() {
      var menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }
    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(e) {
      var menu = document.getElementById('menu');
      var dropmenu = document.querySelector('.dropmenu');
      if (!menu.contains(e.target) && !dropmenu.contains(e.target)) {
        menu.classList.remove('active');
      }
    });