const Song = require('./song');

let playlists = [
  { "songId": 3, "username": "sanju" },
  { "songId": 4, "username": "sanju" },
  { "songId": 1, "username": "sanju" },
  { "songId": 2, "username": "sanju" },

  { "songId": 2, "username": "anoj" },
  { "songId": 3, "username": "anoj" },
  { "songId": 4, "username": "anoj" },
  { "songId": 5, "username": "anoj" }
]

module.exports = class PlayList {
  constructor(username, songId) {
    this.username = username;
    this.songId = songId;
  }

  static getPlayList(username){
    return playlists.filter(a => a.username === username);
  }

  static getPlayListDetails(username) {
    const userPlayList = this.getPlayList(username);
    const songs=Song.getAllSongs();
    return userPlayList.map(playlist=>{
        return songs.find(song=>song.id===playlist.songId);
    });
  }

  static addToPlayList(username, songId){
    const userPlaylist = this.getPlayList(username);
    //validate user

    //validate song
    if (!userPlaylist.includes(userPlaylist.songId)) {
      playlists.push({songId:songId,username:username});
      // console.log(playlists);
      return this.getPlayList(username);
    }
  }

  static removeFromPlaylist(username, songId){
    const index = playlists.findIndex(a=> a.username==username && a.songId==songId);
    if (index>=0) {
      const temp=playlists[index];
      playlists.splice(index, 1);
      return temp;
    }
    else{
      throw new Error("Invalid song id...!!!")
    }
  };
}