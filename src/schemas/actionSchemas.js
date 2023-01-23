import joi from "joi"

export const accessSchema = joi.object(
    {
        name:joi.string().min(1).required(),
        authorization:joi.string().min(1).required()
    }
)