// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connectDb from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`service is running at port: ${process.env.PORT}`)
    } )
})
.catch((error)=>{
    console.log("Mongo db connection failed ",error)
})
// import { DB_NAME } from "./constants";
// import express from "express"
// const app=express()
// // IIFE quick invoke
// ;(async ()=>{
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }
//     catch(error){
//         console.log("ERROR:",error)
//         app.on("error",(error)=>{
//             console.log(error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
// })()

