const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

const FavouritesDataPath = path.join(rootDir, "data", "Favourites.json");

module.exports = class Favourites {
  static addtofavourite(homeid, callback) {
    Favourites.getfavourite((Favourites) => {
      if (Favourites.includes(homeid)) {
        callback("home is already favourite");
      } else {
        Favourites.push(homeid);
        fs.writeFile(FavouritesDataPath, JSON.stringify(Favourites), callback);
      }
    });
  }

  static getfavourite(callback) {
    fs.readFile(FavouritesDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static RemoveFavourite(homeid, callback) {
    Favourites.getfavourite((Favourites) => {
      const RemovedFav = Favourites.filter(id => id !== homeid)
      fs.writeFile(FavouritesDataPath, JSON.stringify(RemovedFav), callback);
    });
  }
};
