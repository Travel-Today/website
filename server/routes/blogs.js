import express from "express";
import getBlogs from "../controllers/blogsController.js";

export const blogsRouter=express.Router();

blogsRouter.route('/')
    .get(getBlogs)

// blogsRouter.route('/:id')
//     .get(getBlogs)