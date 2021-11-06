exports.getAllCars = function (req, res) {
  return res.status(200).json({ data: "All Cars Data" });
};
exports.getSingleCar = (req, res) => {
  return res.send(req.params.id);
};

// CommonJS