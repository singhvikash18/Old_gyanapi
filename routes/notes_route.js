const router = require('express').Router();

const notesroute = require('../controller/notes_controller');

router.get('/all',notesroute.notesController);

module.exports = router;