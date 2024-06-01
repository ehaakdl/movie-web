export enum eNoticationMethodType{
  email = 'email'
}
export enum eResponseStatusType{
  success, fail
}
export interface SaveNoticiationMethodRequest{
  email:string,
  method:eNoticationMethodType
}

export interface CommonResponse{
  data?: object,
  error?: object,
  message?:string

  status: eResponseStatusType
}
