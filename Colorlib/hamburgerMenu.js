    function toggleMenu() {
      var menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }
    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(e) {
      var menu = document.getElementById('menu');
      var hamburger = document.querySelector('.hamburger');
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
      }
    });