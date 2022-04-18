const express = require("express"),
    bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../dist/`))

module.exports = app;