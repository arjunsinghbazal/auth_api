const mongoose = require("mongoose"); 
const connectDB = () =>
   { mongoose.connect("mongodb+srv://arjunsinghbazal:LGgFvgcd6AUOvY2P@temp.g3p2g.mongodb.net/?retryWrites=true&w=majority") 
    console.log("connected to db")
   }; 
module.exports = connectDB;