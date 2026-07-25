const express = require("express")
const {getAllnotes, createNote, updateNote} = require("../controller/notecontroller.js")
const noteRoute = express.Router()

//features
noteRoute.get("/", getAllnotes);
noteRoute.post("/", createNote);
noteRoute.put("/:id", updateNote);
//noteRoute.delete("/:id", getAllnotes)
//noteRoute.get("/:id", getAllnotes)


module.exports = noteRoute;