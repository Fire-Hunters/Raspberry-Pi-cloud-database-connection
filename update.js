import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import Posts from './models/Posts.js'

dotenv.config();




//const PORT = process.env.PORT || 5001;

mongoose.connect(
    process.env.uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err
        console.log("veritabanı girişi başarılı");
    }
)

export const update =async(data)=>{
    console.log(data);
   await Posts.findByIdAndUpdate({_id:"6127e17abb3ad8f12acf5421"},{
      //  createdAt:String(Date.now),
        durum:String(data),
    },{new:true})
}
