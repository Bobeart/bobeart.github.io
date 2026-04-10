// Trigger the about section fade-in when it scrolls into view
const aboutInner = document.querySelector('.about-inner');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutInner.classList.add('visible');
        observer.disconnect(); // Only animate once
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% of the section is visible
);

observer.observe(aboutInner);

// Smooth scroll for the arrow link (fallback for browsers that ignore scroll-behavior)
document.querySelector('.scroll-arrow').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});