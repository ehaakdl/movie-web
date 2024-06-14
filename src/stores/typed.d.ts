export enum eNoticationMethodType{
  email = 'email'
}
export enum eResponseStatusType{
  success, fail
}
export interface UserRegisterRequest{
  email:string,
  password:string
}

export interface CommonResponse{
  data?: object,
  error?: object,
  message?:string

  status: eResponseStatusType
}
