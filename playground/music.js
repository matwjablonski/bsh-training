const createPlayer = function() {
  const playerWrapper = document.createElement('div');
  playerWrapper.classList.add('player-wrapper');

  document.body.insertAdjacentElement('afterbegin', playerWrapper);
}

const app = function() {
  createPlayer();

  console.log('this is my music player');
}

app();
