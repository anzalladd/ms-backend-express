import { Container } from 'typedi'
import { authResponse } from '@/helpers/constants/response'
import { asyncHandler } from '@/helpers/utils'
import { Wrapper } from '@/helpers/utils/Wrapper'
import { Request, Response } from 'express'

export default class AuthController {
  public static signUp = asyncHandler(async (_req: Request, res: Response): Promise<any> => {
    try {
      const authInstance: any = Container.get('authService')
      const result = await authInstance.createUser(_req.body)
      if (result.error) {
        delete _req.body.password
        return new Wrapper(result.error, _req.body).send(res)
      }
      return new Wrapper(authResponse.success, result).send(res)
    } catch (e: any) {
      throw new Error(e)
    }
  })

  public static login = asyncHandler(async (_req: Request, res: Response): Promise<any> => {
    try {
      const authInstance: any = Container.get('authService')
      const result = await authInstance.login(_req.body, res)
      if (result.error) {
        return new Wrapper(result.error, _req.body).send(res)
      }
      return new Wrapper(authResponse.success, result).send(res)
    } catch (e: any) {
      throw new Error(e)
    }
  })

  public static getMe = asyncHandler(async (_req: Request, res: Response): Promise<any> => {
    try {
      const authInstance: any = Container.get('authService')
      const result = await authInstance.getMe(_req, res)
      if (result) {
        return new Wrapper(authResponse.success, result).send(res)
      }
      return new Wrapper(authResponse.success, {}).send(res)
    } catch (e: any) {
      throw new Error(e)
    }
  })
}
