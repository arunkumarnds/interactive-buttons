const overlay = document.getElementById('overlay');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = window.getComputedStyle(button).backgroundColor;
    overlay.style.backgroundColor = color;

    // disable all buttons during the fill animation
    buttons.forEach(btn => (btn.disabled = true));

    overlay.classList.remove('fill');
    overlay.style.height = '0';
    // trigger reflow to restart animation
    void overlay.offsetWidth;
    overlay.classList.add('fill');

    setTimeout(() => {
      overlay.classList.remove('fill');
      overlay.style.height = '0';
      // re-enable buttons once animation completes
      buttons.forEach(btn => (btn.disabled = false));
    }, 3000); // 2s animation + 1s pause
  });
});
