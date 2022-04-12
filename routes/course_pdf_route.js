const router = require('express').Router();
const pdfcontrol = require('../controller/course_video_pdf_controller');


const folderpath = './profile/fileuploads'
const multer = require('multer')
const fs = require('fs');





var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, folderpath)
    },
    filename: async function(req, file, cb) {

        cb(null, file.originalname);

        
    }

});
var upload = multer({ storage: storage });


router.post('/uploadfile', upload.single('pdfName'), pdfcontrol.course_pdf_Controller);


module.exports = router;