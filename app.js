// Get the navigation bar element
const navbar = document.getElementById('navbar');

// Add scroll event listener to change background color when scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
