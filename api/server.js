const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const app = express();
const port = 5000;

//routes

const categoryRoute=require("./routes/categories.js");


dotenv.config();


const connect = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log(error)
    }
}

app.use(express.json());
app.use("/api/categories",categoryRoute);

//app.get("/", (req,res)=> res.send("Hello Dünya"));


app.listen(port,()=>{
    connect();
    console.log(`Example app listening on port ${port}`)
});
