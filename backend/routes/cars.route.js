const Router = require("express").Router;
const carsController = require("../controllers/cars.controller");

const carsRoute = Router();

carsRoute.get("/", carsController.getAllCars);

carsRoute.get("/:id", carsController.getSingleCar);

carsRoute.delete("/:id", carsController.getSingleCar);
carsRoute.put("/:id", carsController.getSingleCar);
carsRoute.patch("/:id", carsController.getSingleCar);



module.exports = carsRoute;
