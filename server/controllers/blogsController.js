// import connection from "../db/connect.js";
import {getAllBlogs,getBlog} from "../queries/blogsQueries.js";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const getBlogs =async (req, res,next) => {



    try {
    const allBlogs = await prisma.blogs.findMany(

        );

    res.status(200).json(allBlogs);
    }

    catch (error) {
        next(error);

    }





}
export default getBlogs;