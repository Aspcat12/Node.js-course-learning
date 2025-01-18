const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter.js")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.use("/products", productsRouter);

app.get("/", (req, res) => {

    // res.send('Hello chat');
    res.render('index',{username: 'Aspcat12',customers: ['kit','Cat','Chat']});

});

app.listen(PORT, () => {

    // console.log("Listening on port %s", chalk.red(port));
    debug("Listening on port "+ chalk.red(PORT));

});
