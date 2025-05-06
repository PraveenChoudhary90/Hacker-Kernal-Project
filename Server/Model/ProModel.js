const mongoose = require("mongoose");
const ProSchema = new mongoose.Schema({
    email:String,
    password:String

})

module.exports  = mongoose.model("Product", ProSchema);