const express=require('express');
const router=express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const {PostModel}=require('../models/postModel')





router.get('/', (req,res) =>{
    PostModel.find((err,docs)=>{
        res.send(docs)
    })
})




router.post('/',(req,res)=>{
    const newPost= new PostModel({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    })
    newPost.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(err)
        }
    })
})



router.put('/:id',(req,res)=>{ 

    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send("ID coolumn xcjf " + req.params.id )
    }
    const updatedPost={
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    }
    PostModel.findByIdAndUpdate(
        req.params.id,
        {$set : updatedPost },
        {new : true},
        (err,docs)=>{
            if(err){
                console.log(err)
            }else{
                res.send(docs)
            }
        }
    )
})





router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id) ){
        return res.status(400).send("ID coolumn " + req.params.id )
    }
    PostModel.findByIdAndRemove(
        req.params.id,
        (err,docs)=>{
            if(!err){
                res.send(docs)
            }else{
                console.log(err)
            }
        }
    )
})


module.exports = router