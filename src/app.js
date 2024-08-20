import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))  //for accepting limited data 
app.use(express.urlencoded({extended: true, limit: "16kb"})) //url endcoder
app.use(express.static("public"))  //for accepting pdf or images in public folder
app.use(cookieParser())  //for accepting cookies to do CRUD operations


//Router Import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)

export { app }
