const Home = require("../models/home");

exports.getAddhomes = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home Page",
    currentPage: "add-home",
    editing: false,
  });
};

exports.postAddhomes = (req, res, next) => {
  const { housename, price, location, imageURL } = req.body;
  const home = new Home(housename, price, location, imageURL);
  home.save();
  res.redirect('/host/host-homes')
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredhome) => {
    res.render("host/host-home-list", {
      registeredhome: registeredhome,
      pageTitle: "Host Homes",
      currentPage: "host-homes",
    });
  });
};

exports.getedithome = (req, res, next) => {
  const id = req.params.homeid;
  const editing = req.query.editing === "true";

  Home.HomeByID(id, (homebyid) => {
    if (!homebyid) {
      return res.redirect("/host/host-homes");
    }
    res.render("host/edit-home", {
      home: homebyid,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.postEdithomes = (req, res, next) => {
  const { id, housename, price, location, imageURL } = req.body;
  const home = new Home(housename, price, location, imageURL);
  home.id = id;
  home.save();
  res.redirect('/host/host-homes')
};
