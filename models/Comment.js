const mongoose = require("mongoose");
//Reference of moongoose Schema
let Schema = mongoose.Schema;

let NoteSchema = new Schema({
    name: {
        type: String,
    },
    body: {
        type: String,
        required: true
    },
});
//Saving ArticleSchema to the Article variable
let Note = mongoose.model("Note", NoteSchema);
//Exporting the Article
module.exports = Note;