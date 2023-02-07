import { userSchema } from "../schemas/userSchema.js";

export default async function userValidate(req, res, next) {
    const { error } = userSchema.validate(req.body)
  
    if (error) return res.sendStatus(400)
  
    res.locals.table = 'users'
  
    next()
  }
