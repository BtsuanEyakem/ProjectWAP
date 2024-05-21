const Playlist = require('../models/playList');

module.exports.getUserPlayList=(req,res)=>{
    res.json(Playlist.getPlayListDetails(req.params.username));
}

module.exports.addToPlayList=(req,res)=>{
    res.status(201).json(Playlist.addToPlayList(req.body.username,parseInt(req.body.songId)));
}

module.exports.removeFromPlaylist=(req,res)=>{
    res.json(Playlist.removeFromPlaylist(req.params.username,parseInt(req.params.songId)));
}