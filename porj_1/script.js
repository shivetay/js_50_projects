'use strict';

const panels = document.querySelectorAll('.panel');

for (let panel of panels) {
  panel.addEventListener('click', () => {
    removeActive();
    if (panel.classList.contains('active')) {
      panel.classList.toggle('active');
    } else {
      panel.classList.toggle('active');
    }
  });
}

const removeActive = () => {
  for (let panel of panels) {
    panel.classList.remove('active');
  }
};
