import express from "express"
import cors from "cors"
const server = express()

import authRouter from "./routes/authRoutes.js"
import actionRouter from "./routes/actionRoutes.js"

server.use(express.json())
server.use(cors())

server.use(actionRouter)
server.use(authRouter)

server.listen(5000, ()=>{
    console.log("Server running on port 5000")
})