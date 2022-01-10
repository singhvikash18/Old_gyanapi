const router = require('express').Router();

const notes = require('../model/notes_table');

const notesService = async(req,res)=>{
    const ns = await notes.find()
    return ns;
}

module.exports = {notesService,}