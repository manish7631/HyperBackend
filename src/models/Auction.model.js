const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    Img_url:{type:String, required:true},
    Desc:{type:String, required:true},
    Quantity:{type:Number, required:true},
    Bids:{type:Number, required:true},
   
   
   
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )
  
  const Auction = mongoose.model("auction", auctionSchema);
  

  module.exports = Auction;