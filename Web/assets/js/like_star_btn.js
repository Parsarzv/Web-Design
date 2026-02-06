function toggleFavorite(btn) {
  btn.classList.toggle("active");

  if (btn.classList.contains("active")) {
    btn.innerText = "❤️";
  } else {
    btn.innerText = "🤍";
  }
}


document.querySelectorAll('.star-card').forEach(card => {
  const stars = card.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.dataset.value);

      stars.forEach(s => {
        const icon = s.querySelector('.material-icons');
        if (parseInt(s.dataset.value) <= value) {
          icon.textContent = 'star';
          icon.style.color = '#FFD700';
        } else {
          icon.textContent = 'star_border';
          icon.style.color = '';
        }
      });
    });
  });
});