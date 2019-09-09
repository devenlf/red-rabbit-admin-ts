import axios from 'axios';
import getCurrentEnv from '../env_file/config'

const newWin = (url:string, id:string):any => {
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("id", id);
  // 防止反复添加
  if (!document.getElementById(id)) {
    document.body.appendChild(a);
  }
  a.click();
};

class http{
    protected axiosObj:any
    protected CurrentEnv:any
    public constructor(){
        console.log()
        this.CurrentEnv = getCurrentEnv(<string>process.env.REACT_APP_CODE_ENV)
        // 配置axios 默认的baseUrl
        this.axiosObj = axios
        this.axiosObj.interceptors.request.use(function (config:any) {
            // Do something before request is sent
            return config;
          }, function (error:any) {
            // Do something with request error
            return Promise.reject(error);
          });
        this.axiosObj.interceptors.response.use( (response:any) => {
            if(response.data.code==103){
              newWin(this.CurrentEnv.VUE_APP_ADV_URL,'VUE_APP_ADV_URL')
            }
            if (response.data.code == 102 || response.data.code == 500) {
              // Message.error(response.data.message);
            }
            return response;
          },  (error:any) => {
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



