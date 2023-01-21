import express from "express"
import cors from "cors"
const server = express()
import { signUpUser, loginUser } from "./controllers/AuthController.js"

server.use(express.json())
server.use(cors())

server.post("/cadastro", signUpUser)
server.post("/", loginUser)

server.listen(5000, ()=>{
    console.log("Server running on port 5000")
})