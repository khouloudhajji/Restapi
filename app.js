const express = require ('express');   // importing the module express
const mongoose = require ('mongoose');  //import mongoose
require('dotenv/config');   //importing the url of the DB stored in the .env file
const app = express();    //execute express
const bodyparser = require('body-parser'); //importing the body-parser that will convert our req to json

// define a middleware  that will make sure that every req make the body-parser runs
app.use(bodyparser.json());

// import routers

const postsRoute = require('./routes/posts'); //requiring routes and puting the path of podts

// create a middleware 

app.use('/etudiant',postsRoute);  //every time you use /etudiants make sure to use postsRoute


// 
app.get('/',(req,res)=>{
    res.send('We are on home !');
});
const connectionParams={
    useNewUrlParser: true,   //to make your url parser available in a new version of mongo
    useUnifiedTopology: true 
}
// CONNECT to DB
mongoose.connect(process.env.DB_CONNECTION,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database.n${err}`);
    })


// start listening
app.listen(3000, ()=> {
    console.log('server connected !');
});
