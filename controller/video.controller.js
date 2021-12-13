const videocontroller =require('../service/video_services');

const httpStatus = require('http-status');

const course_videcontrol = async(req,res)=>{
    const cvd = await videocontroller.videoservice();
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};

const course_videIDcontrol = async(req,res)=>{
    const cvd = await videocontroller.videoserviceId(req.params.video_id);
    const response = cvd;
    const data ={
        itemcount : 2,
        status_code : httpStatus.OK,
        message: "successfully sent",
        data: response,

    };
    res.status(httpStatus.OK).send(data)
};
const video_read ={
    course_videcontrol,
    course_videIDcontrol,
}
module.exports=video_read;