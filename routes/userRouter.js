const express = require("express")
const {registeredhome} = require("./hostRouter")
const userRouter = express.Router()

userRouter.get("/",(req,res,) => {
  res.render("home",{registeredhome : registeredhome,pageTitle : 'Home Page'})
})
module.exports = userRouter