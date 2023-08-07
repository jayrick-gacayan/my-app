import { ResultStatus } from "./enums/result_status";

export class Result<T>{
  data?: T | null = undefined;
  statusCode: number = 0;
  response: any = undefined;
  error?: any = undefined;
  message?: any = undefined;

  constructor(init: Partial<Result<T>>) {
    Object.assign(this, init);
  }

  get resultStatus(): ResultStatus {
    switch (this.statusCode) {
      case 200:
      case 201:
      case 204:
        return ResultStatus.SUCCESS;
      case 400: return ResultStatus.BAD_REQUEST;
      case 401: return ResultStatus.UNAUTHORIZED;
      case 404: return ResultStatus.NOT_FOUND;
      case 500:
      case 501:
      case 502: return ResultStatus.SERVER_ERROR;
    }
    return ResultStatus.NONE;
  }
}