const express=require('express');
const router=express.Router();
const songController=require('../controllers/songController');

router.get('/all',songController.getAllSongs)
// router.get('/',(req,res)=>{
//     res.send('hello');
// })

module.exports=router;