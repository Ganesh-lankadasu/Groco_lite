const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/images", express.static(path.join("backend/images")))





mongoose.connect("mongodb+srv://Ganesh:YZAv7KVdEH1uW7rT@cluster0.gpvql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected to database')
})
.catch(()=>{
    console.log('Database connection failed');
});








const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'backend/images');

    },
    filename:(req,file,cb)=>{
        const name = file.originalname.toLocaleLowerCase().split(' ').join('-');
        cb(null,name);

    }
})



app.post("/api/post",multer({storage:storage}).single("image"),(req,res,next)=>{
    const url = req.protocol + '://' + req.get("host");
    const post=new Post({
        name:req.body.name,
        product:req.body.product,
        weight:req.body.weight,
        price:req.body.price,
        imagepath:url + '/images/' + req.file.filename
    })
    post.save();
    res.status(201).json({
        message:"Post added successfully"
    })

})


app.use("/api/posts",(req,res,next)=>{

    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;

    const productquery = Post.find();

    if(pageSize && currentPage){
        productquery.skip(pageSize * currentPage - pageSize).limit(pageSize);
    }
 
    productquery.then((documents)=>{
        res.status(200).json({
            message:"Response received successfully",
            products:documents
        })
    })



});

app.delete("/api/post/:id",(req,res)=>{
     Post.deleteOne({_id : req.params.id}).then((result)=>{
         console.log(result);
     })
    res.status(200).json({message:"Post deleted successfully"});
})

app.use("/api/fetch/:product",(req,res)=>{
     Post.find({product : req.params.product}).then((result)=>{
         console.log(result);
     })
    res.status(200).json({message:"Post fetched successfully"});
})


module.exports = app