document.addEventListener('DOMContentLoaded', () => {
  // Query the hamburger and nav-links elements
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    // Function to toggle the hamburger and navigation links
    const toggleNavigation = () => {
      navLinks.classList.toggle('expanded');
      document.body.classList.toggle('menu-open');

      if (navLinks.classList.contains('expanded')) {
        hamburger.classList.add('expanded');
      } else {
        hamburger.classList.remove('expanded');
      }
    };

    // Add click event to hamburger to toggle the nav
    hamburger.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleNavigation();
    });

    // Close nav-links if clicking outside
    document.addEventListener('click', (event) => {
      if (
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target) &&
        navLinks.classList.contains('expanded')
      ) {
        toggleNavigation();
      }
    });

    // Adjust visibility of hamburger based on screen size
    const adjustHamburgerVisibility = () => {
      if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
      } else {
        hamburger.style.display = 'none';
        navLinks.classList.remove('expanded'); // Ensure nav is hidden on larger screens
        document.body.classList.remove('menu-open');

        // Reset the hamburger icon
        hamburger.classList.remove('expanded');
      }
    };

    // Initial check and listen for window resizing
    adjustHamburgerVisibility();
    window.addEventListener('resize', adjustHamburgerVisibility);
  } else {
    console.error('Hamburger or navigation links element not found.');
  }
});
