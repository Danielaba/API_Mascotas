const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/userRutas")

const app = express();
app.use(bodyParser.json()); //para que todo lo que se envie se convieta en un json

app.use("/api", routes);


module.exports = app;