const course_pdf_Table = require('../model/cousre_video_pdf_model');
const AppError = require('../utils/app_error');
const httpStatus = require('http-status');

const path = require('path');
const pdfConverter = require('pdf-poppler');


const fs = require('fs');





const course_pdf_Service = async(req) => {
    //console.log('hiee 2')

    const files = req.file.path;
    const folderpath = './profile/fileuploads/saveimage/' + req.file.filename;

    const matchtable = await course_pdf_Table.find({ pdfName: req.file.filename });
    try {
        //file is insert rename folder
        if (matchtable !== null) {
            console.log(matchtable[0].pdf_increment)
            console.log('heey')
            const newFolderPath = "./profile/fileuploads/saveimage/" + req.file.filename + matchtable[0].pdf_increment;
            // folder create with rename 
            // fs.rename(folderpath, newFolderPath, function(err) {
            //     if (err) {
            //         console.log(err)
            //     } else {
            //         console.log("New directory successfully created.")
            //     }
            // })


            fs.mkdirSync(newFolderPath, {
                recursive: true
            });



            let option = {
                    format: 'jpeg',
                    // out_dir : path.dirname(files),
                    out_dir: "profile\\fileuploads\\saveimage\\" + req.file.filename + matchtable[0].pdf_increment,
                    out_prefix: path.basename(files, path.extname(files)),
                    page: null,
                }
                // option.out_dir value is the path where the image will be saved



            pdfConverter.convert(files, option)
                .then(res => {
                    console.log(files)
                    console.log("converted")



                })
                .catch(err => {
                    console.log('an error has occurred in the pdf converter ' + err)
                })


                
            fs.mkdirSync(folderpath)
        } else {

            //file is insert second time

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
                    console.log('hi', res)
                })
                .catch(err => {
                    console.log('an error has occurred in the pdf converter ' + err)
                })
        }
    } catch (err) {
        console.log('an error has occurred')
        console.error(err)
    }






    // const query = { courseid: req.body.courseid }
    // const updatefile = { pdfName: req.file.filename, coursevideopdf_pathUrl: req.headers.host + '/profile/fileuploads' + req.file.filename }



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
    } else {
        return upload;
    }



}



module.exports = { course_pdf_Service, }