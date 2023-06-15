import express from "express";

import  {signupuser}  from "../controller/user-controller.js";

import { loginuser } from "../controller/user-controller.js";

import { uploadImage } from "../controller/image-controller.js";

import { getImage } from "../controller/image-controller.js";

import upload from "../utils/upload.js";

import { createPost,getAllPosts } from "../controller/post-controller.js";

import { updatePost } from "../controller/post-controller.js";

import { getpost } from "../controller/post-controller.js";

import { authenticateToken } from "../controller/jwt-controller.js";

import { deletePost } from "../controller/post-controller.js";

import { newComment ,getComments,deleteComment} from "../controller/comment-controller.js";

const Router=express.Router();



Router.post('/signup',signupuser);
Router.post('/login',loginuser);
Router.post('/file/upload',upload.single('file'),uploadImage);
Router.get('/file/:filename', getImage);
Router.post('/create',authenticateToken,createPost);
Router.get('/posts',authenticateToken,getAllPosts);
Router.get('/post/:id',authenticateToken,getpost);
Router.put('/update/:id',authenticateToken,updatePost);
Router.delete('/delete/:id',authenticateToken,deletePost);
Router.post('/comment/new',authenticateToken,newComment);
Router.get('/comments/:id',authenticateToken,getComments);
Router.delete('/comment/delete/:id',authenticateToken,deleteComment);






export default Router;
