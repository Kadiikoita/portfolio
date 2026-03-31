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
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Votre message est prêt à être envoyé. Merci pour votre visite.';
    form.appendChild(successMessage);

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

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      inputs.forEach((input) => {
        if (input.value.trim() === '') {
          input.classList.add('input-error');
          isValid = false;
        } else {
          input.classList.remove('input-error');
        }
      });

      if (isValid) {
        successMessage.style.display = 'block';
        form.reset();

        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 4000);
      }
    });
  }
}

/* ================= FORMATION PAGE ================= */

if (document.body.classList.contains('formation-page')) {
  const timelineCards = document.querySelectorAll('.timeline-card');
  const formationCards = document.querySelectorAll('.formation-info-card');

  timelineCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

  formationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
  });
}
