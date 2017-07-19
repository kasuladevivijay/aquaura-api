/**
 * Posts Schema
 */

 var mongoose = require('mongoose');

 var postSchema = mongoose.Schema({
     title:{
         type: String,
         required: true
     },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    posted_on:{
        type: Date,
        default: Date.now()
    }
 });

//  export the Schema model
 var Post = module.exports = mongoose.model('Post',postSchema);

//  get all posts

module.exports.getPosts = function(callback,limit){
    Post.find(callback).limit(limit);
}

// get post by id

module.exports.getPostById = function(id, callback){
    Post.findById(id,callback);
}

// add a post

module.exports.addPost = function(post,callback){
    Post.create(post,callback);
}