import { jwtToken } from '@/configs'
import { NextFunction, Request, Response } from 'express'
import jwt from "jsonwebtoken"
import { commonError } from '../constants/response'
import { Wrapper } from '../utils/Wrapper'

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return new Wrapper(commonError.tokenRequired).send(res)
  }
  try {
    jwt.verify(token, jwtToken || '')
  } catch (err) {
    return new Wrapper(commonError.invalidToken).send(res)
  }
  return next()
}
