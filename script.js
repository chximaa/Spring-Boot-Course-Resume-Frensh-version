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
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
);
