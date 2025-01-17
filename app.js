const express = require("express");
const chalk = require("chalk");
const app = express();
const debug = require("debug");
const morgan = require("morgan");
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {

    res.send('Hello chat');

});

app.listen(port, () => {

    console.log("Listening on port %s", chalk.red(port));

});
