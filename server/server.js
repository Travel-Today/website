import express from "express";
// import connection from "./db/connect.js"
import {userRouter} from "./routes/users.js"
import {blogsRouter} from "./routes/blogs.js";
const PORT = process.env.PORT || 5000;
const app = express();

app.use('/user',userRouter)
app.use('/blogs',blogsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});