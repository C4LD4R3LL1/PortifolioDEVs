// Animação ao rolar (IntersectionObserver)
const elements = document.querySelectorAll('section, .card, .member');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Scroll suave ao clicar no menu
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  });
});