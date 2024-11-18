document.addEventListener('DOMContentLoaded', () => {
  // Query the hamburger and nav-links elements
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    // Function to toggle the hamburger and navigation links
    const toggleNavigation = () => {
      navLinks.classList.toggle('expanded');
      document.body.classList.toggle('menu-open');

      // Toggle the hamburger icon animation
      const lines = hamburger.querySelectorAll('.line');
      lines[0].style.transform = navLinks.classList.contains('expanded')
        ? 'rotate(45deg) translate(5px, 5px)'
        : 'rotate(0deg) translate(0, 0)';
      lines[1].style.opacity = navLinks.classList.contains('expanded') ? '0' : '1';
      lines[2].style.transform = navLinks.classList.contains('expanded')
        ? 'rotate(-45deg) translate(5px, -5px)'
        : 'rotate(0deg) translate(0, 0)';
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
        const lines = hamburger.querySelectorAll('.line');
        lines.forEach((line) => {
          line.style.transform = 'rotate(0deg) translate(0, 0)';
          line.style.opacity = '1'; // Show middle line again
        });
      }
    };

    // Initial check and listen for window resizing
    adjustHamburgerVisibility();
    window.addEventListener('resize', adjustHamburgerVisibility);
  } else {
    console.error('Hamburger or navigation links element not found.');
  }
});
