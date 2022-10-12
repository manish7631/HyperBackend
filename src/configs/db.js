let mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect( 
        "mongodb+srv://root:root@cluster0.mnlzecd.mongodb.net/Hyperwork"
    );
};

module.exports = connect;



 