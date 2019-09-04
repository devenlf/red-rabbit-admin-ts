import axios from 'axios';
import getCurrentEnv from '../env_file/config'
class http{
    protected axiosObj:any
    protected CurrentEnv:any
    public constructor(){
        this.CurrentEnv = getCurrentEnv('local')
        // 配置axios 默认的baseUrl
        this.axiosObj = axios
        this.axiosObj.interceptors.request.use(function (config:any) {
            // Do something before request is sent
            return config;
          }, function (error:any) {
            // Do something with request error
            return Promise.reject(error);
          });
        this.axiosObj.interceptors.response.use(function (response:any) {
            // Do something with response data
            return response;
          }, function (error:any) {
            // Do something with response error
            return Promise.reject(error);
          });
        this.axiosObj.defaults.baseURL = this.CurrentEnv.VUE_APP_BASEURL;
        this.axiosObj.defaults.withCredentials = true;
        // 配置默认接口请求超时10s
        this.axiosObj.defaults.timeout = 10000;
    }

    postFunc(url:string,params:any = {}){
        return this.axiosObj.post(url,{
            ...params
        })
    }

    getFunc(url:string,params:any = {}){
        return this.axiosObj.get(url,{
            ...params
        })
    }
}

export default new http()



