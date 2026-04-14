// ============================================================
// Social Icons — stamp the shared template into every
// [data-social] placeholder so links live in one place only.
// ============================================================
const socialTemplate = document.getElementById('tpl-social-icons');

document.querySelectorAll('[data-social]').forEach((container) => {
  if (socialTemplate) {
    container.appendChild(socialTemplate.content.cloneNode(true));
  }
});


// ============================================================
// Smooth scroll — fallback for browsers that ignore
// the CSS scroll-behavior property.
// ============================================================
const scrollArrow = document.querySelector('.scroll-arrow');

if (scrollArrow) {
  scrollArrow.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(scrollArrow.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}


// ============================================================
// Reveal on scroll — watches every element with the .reveal
// class and adds .visible when it enters the viewport.
// To animate any new section, just add class="reveal" to it.
// ============================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});