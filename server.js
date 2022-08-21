const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();
app.use(express.static(path));
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
// simple route
app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});
require("./app/routes/task.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
