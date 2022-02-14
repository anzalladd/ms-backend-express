import express, { NextFunction, Request, Response } from 'express'
import { validator } from '@/helpers/utils'
import { ValidationType } from '@/helpers/constants/validationType'
import AuthController from './AuthController'
import schema from './schema'
import auth from '@/helpers/middleware/auth'

const router = express.Router()

router.post('/signup', validator(schema.signup, ValidationType.BODY), (req, res, next) => {
  AuthController.signUp(req, res, next)
})

router.post('/login', validator(schema.login, ValidationType.BODY), (req, res, next) => {
  AuthController.login(req, res, next)
})

router.get('/get-me', auth, (req: Request, res: Response, next: NextFunction) => {
  AuthController.getMe(req, res, next)
})

export default router
