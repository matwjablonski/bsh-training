'use strict';

function isDarkThemePreffered() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const formatDuration = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedSeconds = (seconds < 10 ? "0" + seconds : seconds); 

  return `${minutes}:${paddedSeconds}`;
}

function Player() {
  this.isPlaying = false;
}

Player.prototype.play = () => {
  this.isPlaying = true;
  console.log('music is playing really loudly', this.isPlaying);
}

function MusicPlayer() {
  this.playerWrapper = null;
  Player.call(this);
  this.createPlayer();
  console.log('this is my music player');
}

MusicPlayer.prototype.createPlayer = function() {
  this.playerWrapper = document.createElement('div');

  const isDarkThemePrefered = isDarkThemePreffered();

  if (isDarkThemePrefered) {
    this.playerWrapper.classList.add('dark');
  } else {
    this.playerWrapper.classList.add('light');
  }

  this.playerWrapper.classList.add('player-wrapper');
  this.playerWrapper.appendChild(this.prepareSongsList());

  document.body.insertAdjacentElement('afterbegin', this.playerWrapper);
}

MusicPlayer.prototype.prepareSongsList = function() {
  const list = document.createElement('ul');

  songs
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

Object.setPrototypeOf(MusicPlayer.prototype, Player.prototype);
const app = new MusicPlayer();

app.play();
