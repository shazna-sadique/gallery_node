

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'/views'))
const uri = "mongodb+srv://shaznasadique:<password>@nodeapp.rz2kpis.mongodb.net/?retryWrites=true&w=majority" 

async function connect() {
    try{
        await mongoose.connect(uri);
        console.log('connected to mongodb');
    }catch(error){
        console.error(error);
    }
}
connect();


const imageSchema = new mongoose.Schema({
    name:String
});
const Imag = mongoose.model( 'Imag' ,imageSchema );

// const img = new Imag(
//     {name:'https://picsum.photos/id/7/4728/3168'}
// )
// img.save();


async function images() {
    try{
        const data = await Imag.find({}).then();
        return data 
    }catch(e){
        console.error(e)
    }
}


app.get('/img' , async (req , res) => {
    try{
        const value = await images();
        // console.log(value)
        // res.render('home.ejs' , {value : value})
        res.status(200).json({message:'success' ,value})
    }catch(e){
        console.error(e);
        res.status(400).json({message:'error'})
    }
})



// app.use(cors());
// let corsOptions ={
//     origin:'localhost:3000'
//  };


app.get('/' , (req,res) => {
    res.render('home.ejs')
})

app.listen(3001,() => {
    console.log('listening in port 3001');
})









