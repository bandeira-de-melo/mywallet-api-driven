import joi from "joi"

export const entryTrasactionSchema = joi.object({
    "amount": joi.number().min(0.01).required(),
    "description": joi.string().min(2).required(),
    "type": joi.string().valid("entry","withdraw")
})

