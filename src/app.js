const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/sidd",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("connection sucess"))
.catch((err)=>console.log(err));