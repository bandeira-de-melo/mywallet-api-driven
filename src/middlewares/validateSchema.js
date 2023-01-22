

const validateSchema = (schema)=>{
    return (req, res, next)=>{
     const {error} = schema.validate(req.body, {abortEarly: false})

     if(error){
        const errorMessages = error.details.map(errdetail => errdetail.message)
        return res.status(422).send(errorMessages)
        console.log(errorMessages)
     }
     next()
    }
  
}

export default validateSchema