const Favourites = require("../models/Favourites");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredhome) => {
    res.render("store/index", {
      registeredhome: registeredhome,
      pageTitle: "index page",
      currentPage: "index",
    });
  });
};

exports.getHomelist = (req, res, next) => {
  Home.fetchAll((registeredhome) => {
    res.render("store/home-list", {
      registeredhome: registeredhome,
      pageTitle: "Registered Home",
      currentPage: "Homes",
    });
  });
};

exports.getbookings = (req, res, next) => {
  Home.fetchAll((registeredhome) => {
    res.render("store/bookings", {
      registeredhome: registeredhome,
      pageTitle: "Booked Homes",
      currentPage: "bookings",
    });
  });
};

exports.gethomedetails = (req, res, next) => {
  const homeid = req.params.homeID;
  Home.HomeByID(homeid,(homebyid) => {
    console.log(homebyid);
    
    if (!homebyid) {
      res.redirect('/Home-list')
    } else {
      res.render("store/home-details", {
        home : homebyid, 
        pageTitle: "Home details",
        currentPage: "Homes",
      });
    }
  });
};

exports.getfavourite = (req, res, next) => {
  Favourites.getfavourite((favoritehome) => {
    Home.fetchAll((registeredhome) => {
      const favhome = favoritehome.map(homeid => registeredhome.find(home => home.id === homeid))
      res.render('store/favourite',{
        Favouritehome : favhome, 
        pageTitle: "Favourites",
        currentPage: "favourite",
      })
    })
  }
  )
};

exports.postAddtoFavourites = (req, res, next) => {
  Favourites.addtofavourite(req.body.id, error => {
    if (error) {
      console.log('Error occured during add to favourite',error);
    }
    res.redirect('/favourite')
  })
};

exports.postRemoveFavourites = (req, res, next) => {
  Favourites.RemoveFavourite(req.body.id, error => {
    if (error) {
      console.log('Error occured during Remove from favourite',error);
    }
    res.redirect('/favourite')
  })
};
