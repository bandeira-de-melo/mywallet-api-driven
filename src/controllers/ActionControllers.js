export const getRegisters = async (req, res)=>{
    const {authorization} = req.headers
    const {name} = req.body
    try{
        const registers = await db.collection("registers").findOne({ token: authorization })
        if(!session) return res.status(401).send("Unauthorized.")

        
        res.status(200).send("User registered successfully.")
    } catch(err){
        console.error(err)
        res.status(500).send("Erro: We are having probles on the server-side...")
    }
}
