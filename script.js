const overlay = document.getElementById('overlay');

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const color = window.getComputedStyle(button).backgroundColor;
    overlay.style.backgroundColor = color;

    overlay.style.animation = 'none';
    overlay.style.height = '0';
    // trigger reflow to restart animation
    void overlay.offsetWidth;
    overlay.classList.add('fill');

    setTimeout(() => {
      overlay.classList.remove('fill');
      overlay.style.height = '0';
    }, 3000); // 2s animation + 1s pause
  });
});
