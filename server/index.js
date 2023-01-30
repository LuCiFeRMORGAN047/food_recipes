const express = require('express')
const mongoose = require('mongoose')
const authroute = require('./routes/AuthRoute')
const postroute = require('./routes/PostRoute')
const verifroute = require('./routes/VerifRoute')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
   origin: true, //included origin as true
   credentials: true, //included credentials as true
};
app.use(cors(corsOptions))
mongoose.connect("mongodb://127.0.0.1:27017/food", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, e =>{
   if(e){
      console.log(e.message)
   }else {
      console.log("connected")
   }
} 
);
app.use(authroute)
app.use(postroute)
app.use(verifroute)

app.listen(5000 , ()=>{
    console.log("server is running");
})