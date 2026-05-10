const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ================= CONTACT PAGE ================= */

if (document.body.classList.contains('contact-page')) {
  const form = document.querySelector('.contact-form');
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

  if (form) {
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
          input.classList.remove('input-error');
        }
      });

      input.addEventListener('focus', () => {
        input.style.transform = 'translateY(-2px)';
      });

      input.addEventListener('blur', () => {
        input.style.transform = 'translateY(0)';
      });
    });

    form.addEventListener('submit', function (event) {
      let isValid = true;

      inputs.forEach((input) => {
        if (input.value.trim() === '') {
          input.classList.add('input-error');
          isValid = false;
        } else {
          input.classList.remove('input-error');
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });
  }
}

/* ================= LIGHT / DARK MODE ================= */

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });
}
