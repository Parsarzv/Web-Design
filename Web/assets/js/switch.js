document.querySelectorAll('.md-switch-wrapper').forEach(wrapper => {
  const sw = wrapper.querySelector('.md-switch');

  wrapper.addEventListener('click', () => {
    if (sw.classList.contains('disabled')) return;

    const isChecked = sw.classList.toggle('checked');
    sw.setAttribute('aria-checked', isChecked);
  });

  wrapper.addEventListener('keydown', e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      wrapper.click();
    }
  });
});
