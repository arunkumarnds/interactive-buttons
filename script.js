document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked the ${button.textContent}!`);
    });
  });