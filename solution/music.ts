import { Song } from './songs.js';
import musicVideos, { MusicVideo } from './music-videos.js';

'use strict';

function isDarkThemePreffered() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const formatDuration = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedSeconds = (seconds < 10 ? "0" + seconds : seconds); 

  return `${minutes}:${paddedSeconds}`;
}

interface IPlayer {
  name: string;
  isPlaying: boolean;

  play(): void;
}

class Player implements IPlayer {
  name: string;
  isPlaying: boolean;

  constructor(name: string) {
    this.name = name;
    this.isPlaying = false; 
  }

  public play(): void {
    this.isPlaying = !this.isPlaying;
    console.log('music is playing really loudly', this.name ,this.isPlaying);
  }
}

class MusicPlayer extends Player {
  playerWrapper?: HTMLDivElement;
  isListFiltered: boolean = false;
  songs: Required<(Song | MusicVideo)[]>;
  totalDuration: number;
  totalDurationBox: HTMLDivElement;

  constructor(name: string) {
    super(name);
    // const a = [...songs, ...musicVideos].map((song, index) => ({
    //   ...song,
    //   songId: song.performer.length * index
    // }));

    // const b: Pick<Song, 'duration'> = {
    //   duration: 123,
    // }
    this.totalDurationBox = document.createElement('div');
    this.createPlayer();
    this.createSearchForm();
    this.fetchData();

    

    this.totalDurationBox.classList.add('total'); 
  }

  createSearchForm() {
    const input = document.createElement('input');
    input.onchange = (e: Event) => {
      this.search((e.target as HTMLInputElement).value);
    }

    this.playerWrapper?.insertAdjacentElement('afterbegin', input);
  }

  async search(title: string) {
    const response = await fetch(`http://localhost:8000/api/songs/search/${title}`);
    const { data } = await response.json();

    this.songs = data;
    this.updateList();
    this.totalDuration = this.setTotalDuration();
    this.updateTotalDuration();
  }

  async fetchData() {
    const response = await fetch('http://localhost:8000/api/songs');
    const { data } = await response.json();

    this.songs = data;
    
    this.playerWrapper && this.playerWrapper.appendChild(this.prepareSongsList());
    this.totalDuration = this.setTotalDuration();
    this.updateTotalDuration();
  }

  createPlayer() {
    this.playerWrapper = document.createElement('div');
  
    const sortButton = document.createElement('button');
    sortButton.innerText = 'Sort by duration';
    sortButton.classList.add('btn');
  
    const filterEltonBtn = document.createElement('button');
    filterEltonBtn.innerText = this.isListFiltered ? 'Reset filter' : 'Only Elton John Songs';
    filterEltonBtn.classList.add('btn');
  
    filterEltonBtn.addEventListener('click', () => {
      if (this.isListFiltered) {
        this.isListFiltered = false;
        filterEltonBtn.innerText = 'Only Elton John Songs'
        // this.songs = [...songs, ...musicVideos];
        this.updateList();
      } else {
        this.isListFiltered = true;
        filterEltonBtn.innerText = 'Reset filter'
        this.filterEltonSongs();
      }
    })
  
    sortButton.addEventListener('click', () => {
      this.sortByDuration();
    });
  
    this.playerWrapper.appendChild(filterEltonBtn);
    this.playerWrapper.appendChild(sortButton);
    this.playerWrapper.appendChild(this.totalDurationBox);
  
    const isDarkThemePrefered = isDarkThemePreffered();
  
    if (isDarkThemePrefered) {
      this.playerWrapper.classList.add('dark');
    } else {
      this.playerWrapper.classList.add('light');
    }
  
    this.playerWrapper.classList.add('player-wrapper');
  
    document.body.insertAdjacentElement('afterbegin', this.playerWrapper);
  }

  prepareSongsList() {
    const list = document.createElement('ul');
  
    this.songs
      .map((song) => {
        const {performer, duration, title} = song;
        const li = document.createElement('li');

        if ('video' in song) {
          const label = document.createElement('div');
          label.classList.add('label');
          label.innerText = 'Video';
          li.appendChild(label);
        }
  
        const h2 = document.createElement('h2');
        h2.innerText = title;
        h2.classList.add('song-title');
  
        const performerElement = document.createElement('small');
        performerElement.innerText = performer;
        h2.appendChild(performerElement);
  
        const durationElement = document.createElement('div');
        durationElement.classList.add('duration');
        durationElement.innerText = formatDuration(duration);
  
        li.appendChild(h2);
        li.appendChild(durationElement);
  
        return li;
      })
      .forEach(li => list.appendChild(li));
  
    return list;
  }

  setTotalDuration() {
    return this.songs.reduce((acc, { duration }) => acc + duration, 0);
  }

  updateTotalDuration() {
    this.totalDurationBox.innerText = formatDuration(this.totalDuration);
  }

  sortByDuration() {
    this.songs.sort((a, b) => a.duration - b.duration);
    this.updateList();
  }

  updateList() {
    if (this.playerWrapper) {
      this.playerWrapper.replaceChild(
        this.prepareSongsList(),
        this.playerWrapper.querySelector('ul') as Node,
      );   
    }
    
    this.totalDuration = this.setTotalDuration();
    this.updateTotalDuration();
  }

  filterEltonSongs() {
    this.songs = this.songs.filter(song => song.performer === 'Elton John');
  
    this.updateList();
  }
}

class Playlist {

}

const app = new MusicPlayer('My music player');

app.play();
