'use strict';

function Player() {
  this.isPlaying = false;
}

Player.prototype.play = () => {
  this.isPlaying = true;
  console.log('music is playing really loudly', this.isPlaying);
}

function isDarkThemePreffered() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const formatDuration = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedSeconds = (seconds < 10 ? "0" + seconds : seconds); 

  return `${minutes}:${paddedSeconds}`;
}

const prepareSongsList = () => {
  const list = document.createElement('ul');

  const elements = songs
    .map((song) => {
      const li = document.createElement('li');

      const h2 = document.createElement('h2');
      h2.innerText = song.title;
      h2.classList.add('song-title');

      const performer = document.createElement('small');
      performer.innerText = song.performer;
      h2.appendChild(performer);

      const duration = document.createElement('div');
      duration.classList.add('duration');
      duration.innerText = formatDuration(song.duration);

      li.appendChild(h2);
      li.appendChild(duration);

      return li;
    })
    .forEach(li => list.appendChild(li));

  return list;
}

function createPlayer() {
  const playerWrapper = document.createElement('div');

  const isDarkThemePrefered = isDarkThemePreffered();

  if (isDarkThemePrefered) {
    playerWrapper.classList.add('dark');
  } else {
    playerWrapper.classList.add('light');
  }

  playerWrapper.classList.add('player-wrapper');
  playerWrapper.appendChild(prepareSongsList());

  document.body.insertAdjacentElement('afterbegin', playerWrapper);
}

const app = function() {
  createPlayer();

  

  
  console.log('this is my music player');
}

app();
