const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");


const DataPath = path.join(rootDir, "data", "homedetail.json"); 

module.exports = class Home {
  constructor(housename, price, location, imageURL) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.imageURL = imageURL;
  }

  save() {
    this.id = Math.random().toString()
    Home.fetchAll((registeredhome) => {
      registeredhome.push(this)
      fs.writeFile(DataPath, JSON.stringify(registeredhome), (error) => {
        if (error) {
          console.log("Error occured while writing into the file", error);
        } else {
          console.log("File writing successfully");
        }
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(DataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static HomeByID(homeid , callback) {
    Home.fetchAll(home => {
      const homebyid = home.find(homie =>
        homie.id === homeid);
      callback(homebyid)
    })
  }
};

