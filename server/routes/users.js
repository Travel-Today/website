import express from "express";
export  const userRouter =express.Router();

userRouter.use((req,res,next)=>{
    console.log("i am middleware")
    next();
});

userRouter.route('/name')
    .get((req,res)=>{
        res.status(200).send("User inserted");
    });