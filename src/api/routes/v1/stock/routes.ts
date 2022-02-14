import express, { NextFunction, Request, Response } from 'express'
import { validator } from '@/helpers/utils'
import { ValidationType } from '@/helpers/constants/validationType'
import StockController from './StockController'
import auth from '@/helpers/middleware/auth'

const router = express.Router()

router.get('/', auth , (req, res, next) => {
    StockController.getStock(req, res, next)
})

export default router
