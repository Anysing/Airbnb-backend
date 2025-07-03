const registeredhome = [];

const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("Addhome", { pageTitle: "Add Home Page" });
});

hostRouter.post("/add-home", (req, res, next) => {
//   registeredhome.push({
//     housename: req.body.housename,
//     price: req.body.price,
//     location: req.body.location,
//     imageURL: req.body.imageURL,
//   });
    console.log(req.body.housename);
    
    res.render("HomeAdd", { pageTitle: "Home Added" });
});

module.exports = hostRouter;
module.exports = registeredhome;
