const router =require("express").Router();
const fs = require('fs');

// router.get("/",function(req,res){
//     res.sendFile(__dirname + "/public/video.html");
//   });  

// router.get("/video",()=>{
//     const range = req.headers.range;
//     if(!range){
//         res.status(400).send("requires range headers");
//     }

//     const videoPath = "video.mp4";
//     const videoSize = fs.statSync("video.mp4").size;

//     const CHUNK_SIZE =10 ** 6 ;
//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

//     const contentLength = end - start + 1;
//     const headers = {
//         "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": contentLength,
//         "Content-Type":"video/mp4",
//     };

//     res.writeHead(206, headers);

//     const videoStream = fs.createReadStream(videoPath , {start ,end});
//     videoStream.pipe(res);
    
// });

 
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
    })
     
    router.get('/video', function(req, res) {
    const path = 'video.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
     
    if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
    ? parseInt(parts[1], 10)
    : fileSize-1
     
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': chunksize,
    'Content-Type': 'video/mp4',
    }
     
    res.writeHead(206, head)
    file.pipe(res)
    } else {
    const head = {
    'Content-Length': fileSize,
    'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
    }
    })


module.exports = router;