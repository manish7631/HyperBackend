const express = require("express")
 const auctionController = require("./controller/Auction.controller")



const app = express()
 app.use(express.json())
 
 app.get("/", async(req, res) => {
    try{
         res.status(200).send("Welcome to the  HyperWork")
     }
    catch(err) {
         res.status(400).send(err)
     }
 })


 app.use("/auction", auctionController)
 

module.exports = app
 

 

 