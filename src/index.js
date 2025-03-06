// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connectDb from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDb()
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

