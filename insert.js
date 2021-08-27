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

export const insert =()=>{
    Posts.create({
        title:'ateş avcıları',
        image:'',
        durum:1,
    })
}
