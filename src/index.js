import express from "express";
import config from "./config/config.js";
import usersRouter from "./users/routes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import e from "express";

const app = express();
// For Parsing JSON to req.body
app.use(express.json());

//mounting the router
app.use("/users",usersRouter);

app.get("/health",(req,res,next)=>
{
    res.status(200).json("The Server is Healthy");
})
app.use(notFound);
app.use(errorHandler);
//TO check the heath of Server



app.listen(config.port,()=>
{
    console.log(`Server Is Running On http://localhost:${config.port||8009} in ${config.env} Enviroment`);
}
);

