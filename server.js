const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/*Frontend */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend/views"));

app.use('/static', express.static(path.join(__dirname, "frontend/static")));

/*MiddleWare */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

/*Routes */
const appRoute = require("./backend/routes/app")

app.use('/', appRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT , ()=> {
    console.log(`Listening on port : ${PORT}`);

});
