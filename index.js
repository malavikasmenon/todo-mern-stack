const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
require('dotenv').config();


const app = express();

const db_connect = "mongodb+srv://malavikasmenon:Malavika29*@cluster0.5qy81.mongodb.net/todoDB?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(db_connect, {useNewUrlParser: true})
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, "client", "build")))


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err,req,res,next)=>{
    console.log(err);
    next();
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, ()=> console.log(`Server is running on port ${port}`));