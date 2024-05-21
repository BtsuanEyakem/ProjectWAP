const express=require('express');
const router=express.Router();
const playListController=require('../controllers/playlistController');

router.get('/:username',playListController.getUserPlayList);
router.post('/',playListController.addToPlayList);
router.delete('/:username/:songId',playListController.removeFromPlaylist);

module.exports=router;