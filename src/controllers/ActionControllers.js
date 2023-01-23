
import db from "../config/database.js"


export const getTrasactions = async (req,res)=>{
   const user = res.locals.user
    const transactions = await db.collection("transactions").find({userId: user._id}).toArray()
    if(transactions.length === 0)res.status(404).send("Não há registros de entrada ou saída")
    return res.send(transactions)
}

export const entryTrasaction = async (req,res)=>{
    const {amount, description, type} = req.body
    const user = res.locals.user
    
    await db.collection("transactions").insertOne({
        amount: amount,
        description: description,
        type: type,
        userId: user._id
    })
    res.status(201).send("Transaction was made successfuly.")
}



