import  mongoose from "mongoose";

const Schema = mongoose.Schema //mongoose şemasını şema değişkenine atayıp kullanacağız

const postSchema = new Schema({
    durum:{
        type:String,
    },
    createdAt:{
        type:Date,  
        default:Date.now 
    },
    image:{
        type:String,
    }
})

const Post = mongoose.model('Post',postSchema);

export default Post;