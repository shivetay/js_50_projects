const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const getJoke = async () => {
  const res = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  if (res.status === 200) {
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
    return data;
  } else {
    throw new Error('error');
  }
};

getJoke();

jokeBtn.addEventListener('click', getJoke);
