export class BaseResponse<T>{
  status: boolean;
  errorMessage: string;
  dataList: T[];
  data: T;
}
