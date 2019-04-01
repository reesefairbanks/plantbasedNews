const mongoose = require("mongoose");
//Reference of moongoose Schema
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    name: {
        type: String,
    },
    body: {
        type: String,
        required: true
    },
});
//Saving ArticleSchema to the Article variable
let Comment = mongoose.model("Comment", CommentSchema);
//Exporting the Article
module.exports = Comment;