const overlay = document.getElementById('overlay');

let activeButton = null;

function createClones(button) {
  const wrapper = document.createElement('div');
  wrapper.className = 'clone-wrapper';
  for (let i = 0; i < 10; i++) {
    const clone = button.cloneNode(true);
    clone.disabled = true;
    wrapper.appendChild(clone);
  }
  button.after(wrapper);
  activeButton = {button, wrapper};
}

function removeClones() {
  if (activeButton && activeButton.wrapper) {
    activeButton.wrapper.remove();
    activeButton = null;
  }
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mousedown', () => createClones(button));
  button.addEventListener('mouseup', removeClones);
  button.addEventListener('mouseleave', removeClones);

  button.addEventListener('click', () => {
    const color = window.getComputedStyle(button).backgroundColor;
    overlay.style.backgroundColor = color;

    overlay.classList.remove('fill');
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

document.addEventListener('mouseup', removeClones);
