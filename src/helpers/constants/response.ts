export const SUCCESS_CODE = 200
export const CREATED_CODE = 201
export const BAD_REQUEST_CODE = 400
export const INVALID_TOKEN = 401
export const TOKEN_REQUIRED = 403
export const NOT_FOUND_CODE = 404
export const NO_DATA_CODE = 402
export const DATA_ALREADY_EXIST = 409

export const commonError = {
  badRequest: { statusCode: BAD_REQUEST_CODE, code: 'bad_request' },
  tokenRequired: { statusCode:  TOKEN_REQUIRED, code: 'token_required', msg: 'A token is required for authentication'},
  invalidToken: { statusCode: INVALID_TOKEN, code: 'invalid_token', msg: 'Invalid Token' }
}

export const authResponse = {
  success: { statusCode: SUCCESS_CODE, code: 'success_auth', msg: 'OK' },
  userAlreadyExist: { statusCode: DATA_ALREADY_EXIST, code: 'user_already_exist', msg: 'User Already Exist' },
  invalidCredentials: { statusCode: BAD_REQUEST_CODE, code: 'invalid_credentials', msg: 'Invalid Credentials' }
}

export const stockResponse = {
  success: { statusCode: SUCCESS_CODE, code: 'success_get_stock', msg: 'Success Get Stock' }
}
