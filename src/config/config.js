import dotenv  from "dotenv";

dotenv.config()//Loads .env file contents into process.env by default.

export default{
    port: process.env.port || 1000,
    env: process.env.ENV || "Developement"
};