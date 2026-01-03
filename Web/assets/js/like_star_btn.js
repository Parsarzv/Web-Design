function toggleFavorite(btn) {
  btn.classList.toggle("active");

  if (btn.classList.contains("active")) {
    btn.innerText = "❤️";
  } else {
    btn.innerText = "🤍";
  }
}


const stars = document.querySelectorAll('.rating .star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');

    stars.forEach(s => {
      const icon = s.querySelector('.material-icons');
      if (s.getAttribute('data-value') <= value) {
        s.classList.add('active');
        icon.textContent = 'star';
      } else {
        s.classList.remove('active');
        icon.textContent = 'star_border';
      }
    });
  });
});

