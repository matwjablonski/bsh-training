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

const prepareSongsList = () => {
  const a = songs
    .filter((song) => song.duration > 210 )
    .map((song) => ({
      ...song,
      isLongPlay: true,
    }));

  const totalDuration = a
    .reduce((acc, curr) => {
      return acc + curr.duration;
    }, 0)


  console.log(a);
  console.log(totalDuration);
}

function createPlayer() {
  const playerWrapper = document.createElement('div');

  const isDarkThemePrefered = isDarkThemePreffered();

  if (isDarkThemePrefered) {
    playerWrapper.classList.add('dark');
  } else {
    playerWrapper.classList.add('light');
  }

  playerWrapper.addEventListener('click', function() {
    alert('prefered theme is: ' + isDarkThemePrefered ? 'dark' : 'light');
  })

  playerWrapper.classList.add('player-wrapper');

  document.body.insertAdjacentElement('afterbegin', playerWrapper);
}

const app = function() {
  createPlayer();

  prepareSongsList();

  
  console.log('this is my music player');
}

app();
