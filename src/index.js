import 'dotenv/config'
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import express from 'express';
import cors from 'cors'
import connectdb from './db/index.js';
import { app } from './app.js';

const port = process.env.PORT || 3000


connectdb().then(
    ()=>{
        app.listen(process.env.PORT || 8000, ()=>{
            console.log("Server is running on port " + process.env.PORT);
        })
    }
).catch((err)=>{
    console.log("Mongo db connection failed: " + err.message);
})



























// app.use(cors())

// console.log("asdada",process.env.MONGODB_URI);




// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("database connected");
//        app.on('error', (err)=>{
//         console.log("Error: ", err);
//         throw err;
//        });

//        app.listen(process.env.PORT, () => {
//         console.log("listening on port " + process.env.PORT);
//        })
//     } catch (error) {
//         console.log("mongo db connection error",error);
//         throw error
        
//     }
// })()







// function connectdb(){

// }

// connectdb()