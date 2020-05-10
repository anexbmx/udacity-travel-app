const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

const trips = [];

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("dist"));


app.get("/", (req, res) => {
    res.send(path.resolve("dist/index.html"));
})

app.post('/trip', (req, res) => {
    if (!req.body.trip)
        return res.status(400).send({ message: "trip is not defined" });
    trips.push(req.body.trip);
    res.send(req.body.trip);
});

app.listen(process.env.PORT, () => {
    console.log('🌐 app listening on port ' + process.env.PORT + '!')
})

module.exports = app;