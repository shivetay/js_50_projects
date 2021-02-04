'use strict';

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currntActive = 1;

next.addEventListener('click', () => {
  currntActive++;

  if (currntActive > circles.length) {
    currntActive = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currntActive--;

  if (currntActive < 1) {
    currntActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, circleId) => {
    if (circleId < currntActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currntActive === 1) {
    prev.disabled = true;
  } else if (currntActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
