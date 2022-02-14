import { Container } from 'typedi'
import { authResponse, stockResponse } from '@/helpers/constants/response'
import { asyncHandler } from '@/helpers/utils'
import { Wrapper } from '@/helpers/utils/Wrapper'
import { Request, Response } from 'express'

export default class StockController {
  public static getStock = asyncHandler(async (_req: Request, res: Response): Promise<any> => {
    const stockInstance: any = Container.get('stockService')
    const result = await stockInstance.getStockOfProduct(_req.query)
    return new Wrapper(stockResponse.success, result).send(res)
  })
}
