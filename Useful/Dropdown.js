
    function toggleDropdown(dropdownId) {
  // Close all dropdowns first
  var dropdowns = document.getElementsByClassName("dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.id !== dropdownId) {
      openDropdown.classList.remove('show');
    }
  }

  // Toggle the specific dropdown
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}

// Close the dropdown if user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}