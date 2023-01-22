import {Router} from "express"
import validateSchema from "../middlewares/validateSchema.js"
import { signUpUser, loginUser } from "../controllers/AuthController.js"
import { loginUserSchema, registerUserSchema } from "../schemas/authSchemas.js"


const authRouter = Router()

authRouter.post("/", validateSchema(loginUserSchema), loginUser)
authRouter.post("/cadastro", validateSchema(registerUserSchema), signUpUser)
export default authRouter