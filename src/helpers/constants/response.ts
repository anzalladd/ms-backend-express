export const SUCCESS_CODE = 200
export const CREATED_CODE = 201
export const BAD_REQUEST_CODE = 400
export const NOT_FOUND_CODE = 404
export const NO_DATA_CODE = 402

export const commonError = {
  badRequest: { statusCode: BAD_REQUEST_CODE, code: 'bad_request' },
};

export const entitiesResponse = {
  success: { statusCode: SUCCESS_CODE, code: 'success_customers', msg: "OK" },
  badRequest: { statusCode: BAD_REQUEST_CODE, code: 'bad_request_customer', msg: "Bad Request Customer" },
  noData: { statusCode: NO_DATA_CODE, code: 'no_data_code', msg: "No Data on Customers" },
  notFound: { statusCode: NOT_FOUND_CODE, code: 'customers_not_found', msg: "Customer Not Found" } 
}

export const onProcessResponse = {
  badRequest: { statusCode: BAD_REQUEST_CODE, code: 'bad_request_entity', msg: "Bad Request" },
  noData: { statusCode: NO_DATA_CODE, code: 'no_data_on_entity', msg: "No Data on Entity" },
  notFound: { statusCode: NOT_FOUND_CODE, code: 'entity_not_found', msg: "Entity Not Found" } 
}
