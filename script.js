// script.js
const overlay = document.getElementById('overlay');
const buttons = document.querySelectorAll('.btn');

// Kick off the drip effect on button click
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = getComputedStyle(button).backgroundColor;
    startDrip(color);
  });
});

function startDrip(color) {
  // disable buttons during animation
  buttons.forEach(btn => btn.disabled = true);

  // clear previous drops
  overlay.innerHTML = '';
  overlay.style.backgroundColor = 'transparent';

  const dropCount = 40;
  const maxDelay = 1.5; // seconds

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement('div');
    const delay = Math.random() * maxDelay;
    drop.classList.add('drop');
    drop.style.backgroundColor = color;
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.width = `${2 + Math.random() * 6}px`;
    drop.style.setProperty('--delay', `${delay}s`);
    overlay.appendChild(drop);
  }

  // once the drips have finished, show solid color then reset
  setTimeout(() => {
    overlay.style.backgroundColor = color;
    overlay.innerHTML = '';
    setTimeout(() => {
      overlay.style.backgroundColor = 'transparent';
      buttons.forEach(btn => btn.disabled = false);
    }, 1000); // hold color for a moment
  }, (maxDelay + 2) * 1000);
}
