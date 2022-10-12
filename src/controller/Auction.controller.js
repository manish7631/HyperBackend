const express = require("express")
const Auction = require("../models/Auction.model")
const router = express.Router() 
 
router.get("", async(req, res) => {
    try{

        


        const auction = await Auction.find().lean().exec();
  
        return res.status(200).send(auction);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  
  

  router.get("/:id", async(req, res) => {
    try{

        


        const auction = await Auction.findById(req.params.id).lean().exec();
  
        return res.status(200).send(auction);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });

  router.patch("/:id", async(req, res) => {
    try{

        


        const auction = await Auction.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        }).lean().exec();
  
        return res.status(200).send(auction);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  
  
  


  router.post("", async(req, res) => {
    try{
        const auction = await Auction.create(req.body);
  
        return res.status(200).send(auction);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  

  module.exports = router