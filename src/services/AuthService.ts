import { authResponse } from '@/helpers/constants/response'
import { IUser, IUserInputDto } from '@/intefaces/IUser'
import { Request, Response } from 'express'
import { Inject, Service } from 'typedi'
import { getRepository } from 'typeorm'
import { Logger } from 'winston'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { jwtToken } from '@/configs'

@Service()
export default class UserService {
  authRepository: any
  constructor(@Inject('userEntity') public userEntity: Entities.User, @Inject('logger') public logger: Logger) {
    this.authRepository = getRepository(this.userEntity)
  }

  public async createUser(payload: IUserInputDto): Promise<any> {
    try {
      const { email, password }: IUserInputDto = payload
      const user: IUserInputDto = {
        ...payload,
        email: email.toLowerCase(),
        password: await bcrypt.hash(password, 10),
      }
      const oldUser: IUser = await this.authRepository.findOne({ email })
      if (!!oldUser) {
        return {
          error: authResponse.userAlreadyExist,
        }
      }
      const createUser: IUser = await this.authRepository.save(user)
      delete createUser.password
      return createUser
    } catch (e: any) {
      this.logger.error(e)
      throw new Error(e)
    }
  }

  public async login(payload: IUserInputDto, res: Response): Promise<any> {
    try {
      const { email, password, username }: IUserInputDto = payload
      const user: IUser = await this.authRepository.findOne({ email })
      if (user && (await bcrypt.compare(password, user.password || ''))) {
        const token = jwt.sign({ id: user.id, email, username }, jwtToken || '', {
          expiresIn: '2h',
        })
        delete user.password
        user.token = token
        return user
      } else {
        return {
          error: authResponse.invalidCredentials,
        }
      }
    } catch (e: any) {
      this.logger.error(e)
      throw new Error(e)
    }
  }

  public async getMe(req: Request): Promise<any> {
    try {
      const token = req.headers.authorization?.split(' ')[1]
      const { id }: any = jwt.verify(token || '', jwtToken || '')
      const user: IUser = await this.authRepository.findOne({ id })
      return user
    } catch (e: any) {
      this.logger.error(e)
    }
  }
}
