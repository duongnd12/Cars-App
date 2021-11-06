const express = require("express");
const cors = require("cors");
const carsRoute = require("./routes/cars.route");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);

app.use('/cars', carsRoute)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
