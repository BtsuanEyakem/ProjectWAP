const express = require('express');
const userRouter = require('./routes/userRouter');
const songRouter = require('./routes/songRouter');
const playlistRouter = require('./routes/playlistRoute');
const app = express();

app.use(express.json());
app.use('/user',userRouter);

//song
app.use('/songs', songRouter);
//playlist
app.use('/playlists', playlistRouter);

app.use((err,req,res,next)=>{
    res.status(500).json({isSuccess:false,message:err.message});
})

app.use((req,res,next)=>{
    res.status(404).json({isSuccess:false,message:"Page not found!!"});
})

app.listen(4000,()=>{
 console.log('4000 port is running !!!');
});