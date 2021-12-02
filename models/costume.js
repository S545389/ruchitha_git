const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {
    type: String,
    maxlength: 19,
    minlength: 2
},  
 cost: {
    type: Number,
    min: 20,
   max: 50
} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 