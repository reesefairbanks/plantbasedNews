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

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");
//For scraping
const axios = require("axios");
const cheerio = require("cheerio");
//const db = require("./models");
//Apps display PORT
const port = process.env.PORT || 3000;
//Initialize Express
const app = express();

app.use(logger("dev"));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

//Make the public folder static 
app.use(express.static(process.cwd() + "/public"));
//app.use(express.static("public"));

//Connecting to Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/plantbasedNews";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;
//Handle connection error
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected to Mongoose");
});
//Setting up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controller/controller.js");
app.use("/", routes);



//Start server
app.listen(port, function() {
    console.log("Listening on PORT " + port + "!");
  });
