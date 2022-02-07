import { Response } from "express";

abstract class ApiResponse {
  constructor(
    protected statusCode: string,
    protected status?: number,
    protected message?: string
  ) {}

  protected prepare<T extends ApiResponse>(
    res: Response,
    response: T
  ): Response {
    return res.status(this.status || 0).json(ApiResponse.sanitize(response));
  }

  public send(res: Response): Response {
    return this.prepare<ApiResponse>(res, this);
  }

  private static sanitize<T extends ApiResponse>(response: T) {
    const clone: T = {} as T;
    Object.assign(clone, response);
    delete clone.status;
    for (const i in clone) if (typeof clone[i] === "undefined") delete clone[i];
    return clone
  }

}

interface ResponseMessage {
  msg: string;
  code: string;
  statusCode: number;
}


export class Wrapper<T> extends ApiResponse {
  constructor(message: ResponseMessage, private data?: T) {
    super(message.code, message.statusCode, message.msg);
  }

  send(res: Response): Response {
    return super.prepare<Wrapper<T>>(res, this);
  }
}
