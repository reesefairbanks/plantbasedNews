//Scrap website plantbasednews.org of data
    //Headline
    //Summary
    //URL
//Display returned data to user
//Save scraped articles to database
//User can leave comments
    //Save comments to the database so user can see them later
    //Associate comments to articles in database
    //User can delete comments left on article
    //All stored comments should be visible to everyone

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
