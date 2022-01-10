const notesService= require('../service/notes_services');

const httpStatus = require('http-status');

const notesController = async(req,res)=>{
    const test=await notesService.notesService();
    const response = test;
    const data ={
        itemcount : 1,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
}
const read ={
    notesController,
}
module.exports = read