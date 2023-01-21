import db from "../config/database.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"
import { ObjectId } from "mongodb"


export const signUpUser = async (req, res)=>{
    const {name, email, password} = req.body
    try{
        const appUser = await db.collection("users").findOne({ email })
        if(appUser) return res.status(409).send("This user has been already registered.")
        
        const bcryptedPassword = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({
            name,
            email,
            password: bcryptedPassword
        })
        res.status(201).send("User registered successfully.")
    } catch(err){
        console.error(err)
        res.status(500).send("Erro: We are having probles on the server-side...")
    }
}

export const loginUser = async (req, res)=>{
    const {email, password} = req.body

    try{

    const appUser = await db.collection("users").findOne({ email })
    if(!appUser) return res.status(401).send("email or password are incorrect.")
    console.log(appUser)
    const isPassword = bcrypt.compareSync(password, appUser.password)
    if(!isPassword) return res.status(401).send("email or password are incorrect.")

    const token = uuidv4()

    await db.collection("session").insertOne({_id: ObjectId(appUser._id), token})

    res.status(200).send("User has logged in succesfully!")

    }catch(err){
        console.error(err)
        res.status(500).send("Error: We are having some problems on the server side...")
    }
}