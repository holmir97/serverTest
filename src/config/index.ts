import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "deveopment";

const envFound = dotenv.config();
if(envFound.error){
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default{
    port: parseInt(process.env.PORT,10),
    mongoURI: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO
}