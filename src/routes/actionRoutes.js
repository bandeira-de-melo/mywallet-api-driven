import {Router} from "express"
import { entryTrasaction, getTrasactions } from "../controllers/ActionControllers.js"
import { sessionValidate } from "../middlewares/sessionValidate.js"
import userValidate from "../middlewares/userValidate.js"
import { entryTrasactionSchema } from "../schemas/actionSchemas.js"

const actionRouter = Router()

actionRouter.get("/home", sessionValidate, getTrasactions)
actionRouter.post("/nova-entrada", sessionValidate,userValidate(entryTrasactionSchema), entryTrasaction)

export default actionRouter
