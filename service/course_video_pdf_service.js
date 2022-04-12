const course_pdf_Table = require('../model/cousre_video_pdf_model');
const room_pdf_images = require('../model/room_images_model');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');
const path = require('path');
const pdfConverter = require('pdf-poppler');
const fs = require('fs');

const course_pdf_Service = async(req) => {
    const files = req.file.path;
    const folderpath = './profile/fileuploads/saveimage/'+req.file.filename;
    const matchtable = await course_pdf_Table.find({ pdfName: req.file.filename });
        const isPdfPresent = matchtable[0]?matchtable[0].pdf_increment:null;
    try {
        //file is insert rename folder
        if ( isPdfPresent !== null) {
            // console.log(matchtable[0].pdf_increment)
            const newFolderPath = "./profile/fileuploads/saveimage/" + req.file.filename + isPdfPresent;
            // folder create with rename 
   

            fs.mkdirSync(newFolderPath, {
                recursive: true
            });

            let option = {
                    format: 'jpeg',
                    // out_dir : path.dirname(files),
                    out_dir: "profile\\fileuploads\\saveimage\\" + req.file.filename + isPdfPresent,
                    out_prefix: path.basename(files, path.extname(files)),
                    page: null,
                }
                // option.out_dir value is the path where the image will be saved

            pdfConverter.convert(files, option)
                .then(res => {
                   
                    fs.readdir("profile\\fileuploads\\saveimage\\" + req.file.filename+ isPdfPresent, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        } 
                        //listing all files using forEach
                         files.forEach(async function(file) {
                            // Do whatever you want to do with the file
                            // console.log(file); 
                            const imagepath = 'profile/fileuploads/saveimage/' + req.file.filename+ isPdfPresent+"/"+file;
                            await room_pdf_images.create({pdfImage:file, roodid:req.body.roomid, pdfName:req.file.filename, imagePath:imagepath})
                        });
                    });
                

                })
                .catch(err => {
                    console.log('an error has occurred in the pdf converter ' + err)
                })        
            // fs.mkdirSync(folderpath)
        } else {
            //file is insert first time
            fs.mkdir(folderpath, { recursive: true }, function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("New directory successfully created.")
                }
            })
            let option = {
                format: 'jpeg',
                // out_dir : path.dirname(files),
                out_dir: "profile\\fileuploads\\saveimage\\" + req.file.filename,
                out_prefix: path.basename(files, path.extname(files)),
                page: null,
            }
            pdfConverter.convert(files, option)
                .then(res => {
                    console.log(res)
                    fs.readdir("profile\\fileuploads\\saveimage\\" + req.file.filename, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        } 
                        //listing all files using forEach
                        files.forEach(async function (file) {
                            // Do whatever you want to do with the file
                            console.log(file); 
                            const imagepathnew = "profile/fileuploads/saveimage/" + req.file.filename+"/"+file;
                            await room_pdf_images.create({pdfImage:file, roodid:req.body.roomid, pdfName:req.file.filename, imagePath:imagepathnew})
                        });
                    });
                })
                .catch(err => {
                    console.log('an error has occurred in the pdf converter ' + err)
                })
        }
    } catch (err) {
        console.log('an error has occurred')
        console.error(err)
    }

    const upload = await course_pdf_Table.create({ 
        pdfName: req.file.filename,
         pdf_increment: 1, 
         courseid:req.body.courseid,
         videoid:req.body.roomid,
         coursevideopdf_pathUrl: req.file.path,
         roomid:req.body.roomid
        });
    if (upload == null) {
        throw new AppError(httpStatus.BAD_REQUEST, " Not updated");
    } 

    const all_images = await room_pdf_images.find({ pdfName: req.file.filename });
    return all_images;

}

module.exports = { course_pdf_Service, }
