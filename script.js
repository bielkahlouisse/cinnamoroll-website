const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('show');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('show'));
});

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const closeModal = document.querySelector('.close-modal');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    if (!modal || !modalImg) return;
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});
function hideModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}
closeModal?.addEventListener('click', hideModal);
modal?.addEventListener('click', e => { if (e.target === modal) hideModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') hideModal(); });

const quizForm = document.querySelector('#quizForm');
const quizResult = document.querySelector('#quizResult');
if (quizForm && quizResult) {
  quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const answers = ['q1', 'q2', 'q3', 'q4'];
    const correct = ['2001', 'Cafe Cinnamon', 'ears', 'shy'];
    let score = 0;
    answers.forEach((q, i) => {
      const selected = quizForm.querySelector(`input[name="${q}"]:checked`);
      if (selected?.value === correct[i]) score++;
    });
    quizResult.style.display = 'block';
    quizResult.textContent = `You got ${score}/4! ${score === 4 ? 'Cinnamoroll expert status unlocked!' : 'So cute! Try again and learn a little more about Cinnamoroll.'}`;
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
