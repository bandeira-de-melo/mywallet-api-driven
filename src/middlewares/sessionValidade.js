const sessionValidate = (req, res, next)=>{
    const {authorization} = req.headers
    const {name} = req.body

    const authRegex = authorization?.match(/^(Bearer )/g)
    if(!authRegex) return res.status(422).send("Incorrect Bearer token format.")

    const token = authorization.replace('Bearer ', '');

    if(!token) return res.sendStatus(422).send("A Bearer token must be sent by request headers.");
    
    if(!name) return res.status(422).send("A name must to be sent by request body")
    


    if(error){
        const errorMessages = error.details.map(errdetail => errdetail.message)
        return res.status(422).send(errorMessages)
        console.log(errorMessages)
     }
     next()
    }
  
