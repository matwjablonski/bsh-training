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

function Player(name) {
  this.name = name;
  this.isPlaying = false;
}

Player.prototype.play = () => {
  this.isPlaying = !this.isPlaying;
  console.log('music is playing really loudly', this.name ,this.isPlaying);
}

function MusicPlayer() {
  this.playerWrapper = null;
  Player.call(this);
  this.createPlayer();
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
    .map(({performer, duration, title}) => {
      const li = document.createElement('li');

      const h2 = document.createElement('h2');
      h2.innerText = title;
      h2.classList.add('song-title');

      const performerElement = document.createElement('small');
      performer.innerText = performer;
      h2.appendChild(performerElement);

      const durationElement = document.createElement('div');
      duration.classList.add('duration');
      duration.innerText = formatDuration(duration);

      li.appendChild(h2);
      li.appendChild(durationElement);

      return li;
    })
    .forEach(li => list.appendChild(li));

  return list;
}

Object.setPrototypeOf(MusicPlayer.prototype, Player.prototype);
const app = new MusicPlayer();

app.name = 'My music player';
app.play();
