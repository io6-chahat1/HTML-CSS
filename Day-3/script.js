document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('clicked');
    setTimeout(() => {
      icon.classList.remove('clicked');
    }, 400);
  });
});
