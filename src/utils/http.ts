import { useRequest } from 'ahooks';
import axios, { AxiosRequestConfig } from 'axios';

export const useReq = (opt: Record<string, any> = {}) => {
  return useRequest((p: AxiosRequestConfig) => p, {
    manual: true,
    requestMethod: (p: AxiosRequestConfig) => {
      return axios(p);
    },
    ...opt,
  });
};
