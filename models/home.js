const db = require('../utils/databaseUtils')

module.exports = class Home {
  constructor(housename, price, location, imageURL,description,id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.imageURL = imageURL;
    this.description = description;
    this.id = id;
  }

  save() {
    db.execute('insert into homes(housename,price,location,imageURL,description) values (?,?,?,?,?)',[this.housename,this.price,this.location,this.imageURL,this.description])
  }

  static fetchAll() {
    return db.execute('select * from homes')
  }

  static HomeByID(homeid) {
   return db.execute('select * from homes where id = ?',[homeid])
  }

  static deletehome(homeid) {
    return db.execute('delete from homes where id = ?',[homeid])
  }
};
