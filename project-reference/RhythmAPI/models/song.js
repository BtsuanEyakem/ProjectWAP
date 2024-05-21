let songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', url: '/songs/song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', url: '/songs/song2.mp3' },
  { id: 3, title: 'Song 3', artist: 'Artist 2', url: '/songs/song2.mp3' },
  { id: 4, title: 'Song 4', artist: 'Artist 2', url: '/songs/song2.mp3' },
  { id: 5, title: 'Song 5', artist: 'Artist 2', url: '/songs/song2.mp3' },
  { id: 6, title: 'Song 6', artist: 'Artist 2', url: '/songs/song2.mp3' },
  // Add more songs as needed
];

module.exports = class Song {
  constructor(id, title, artist, url) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.url = url;
  }

  static getAllSongs() {
    return songs;
  };
}