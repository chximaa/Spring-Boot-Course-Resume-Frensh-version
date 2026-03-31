
function repond(el, correct) {
  const opts = el.closest('.opts').querySelectorAll('.opt');
  opts.forEach(o => o.classList.remove('correct', 'wrong'));
  el.classList.add(correct ? 'correct' : 'wrong');
}

function toggle(btn) {
  const box = btn.nextElementSibling;
  if (box.style.display === 'block') {
    box.style.display = 'none';
    btn.textContent = btn.textContent.replace('Masquer', 'Voir');
  } else {
    box.style.display = 'block';
    btn.textContent = btn.textContent.replace('Voir', 'Masquer');
  }
}

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
);

// Highlight active section on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.toc-link').forEach(link => {
        link.style.background = '';
        link.style.color = '';
        if (link.getAttribute('href') === '#' + id) {
          link.style.background = 'rgba(96,165,250,0.08)';
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

document.querySelectorAll('.chapter[id], .exam-wrap[id]').forEach(el => observer.observe(el));
