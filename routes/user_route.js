const router = require('express').Router();

const multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './profile')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

const authController = require('./../controller/auth_controller');

router.post('/signup',authController.userauthcontrol);

router.post('/verifytoken',authController.fetchIdcontrol);

router.post('/forgotpassword',authController.forgotPassword);

router.post('/updatepassword',authController.updatepassword);

router.post('/userupdate',authController.userContolupdate);

router.post('/updateUserPassword',authController.userPassControlupdate);



router.post('/uploadPhoto', upload.single('avatar'),authController.userAvatarControlupdate);
router.post('/emailotp',authController.emailotpController);



//router.post('/forgotpassword',authController.generateResetPasswordToken)

//router.post('/login',authController.login);

module.exports = router;