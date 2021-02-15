'use strict';

const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setInterval(() => {
      e.target.value = '';
    }, 15);
    randomPick();
  }
});

const createTags = (input) => {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const randomPick = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlith(randomTag);

    setTimeout(() => {
      unhighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlith(randomTag);
    }, 100);
  }, times * 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlith = (tag) => {
  tag.classList.add('highlight');
};

const unhighlight = (tag) => {
  tag.classList.remove('highlight');
};
