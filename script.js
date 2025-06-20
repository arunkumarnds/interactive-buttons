// script.js
const overlay = document.getElementById('overlay');
const buttons = document.querySelectorAll('.btn');

// Kick off the fill on button click
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = getComputedStyle(button).backgroundColor;
    overlay.style.backgroundColor = color;

    // Disable all buttons immediately
    buttons.forEach(btn => btn.disabled = true);

    // Restart the fill animation
    overlay.classList.remove('fill');
    overlay.style.height = '0';
    // force reflow
    void overlay.offsetWidth;
    overlay.classList.add('fill');
  });
});

// When the fill animation ends, wait 1s, then reset and re-enable
overlay.addEventListener('animationend', () => {
  setTimeout(() => {
    overlay.classList.remove('fill');
    overlay.style.height = '0';
    buttons.forEach(btn => btn.disabled = false);
  }, 1000); // 1s pause after the 2s fill
});
