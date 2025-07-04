const registeredhome = [];

const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("Addhome", { pageTitle: "Add Home Page" });
});

hostRouter.post("/add-home", (req, res, next) => {
  registeredhome.push(req.body)
  res.render("HomeAdd", { pageTitle: "Home Added" });
});

exports.hostRouter = hostRouter
exports.registeredhome = registeredhome
