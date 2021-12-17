const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name:{type:String,required:true},
    product:{type:String,required:true},
    weight:{type:String,required:true},
    price:{type:String,required:true},
    imagepath:{type:String,required:true}
})

module.exports=mongoose.model('Post',postSchema);