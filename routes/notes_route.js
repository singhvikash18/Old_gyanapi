const router = require('express').Router();

const notesroute = require('../controller/notes_controller');

router.post('/getbycourse',notesroute.notesController);

router.get('/noteDetails/:_id',notesroute.notesIdController);

router.post('/categoryid',notesroute.notesCategoryController);

module.exports = router;