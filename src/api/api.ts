import http from './server'
export default {
    getUserInfo:():Promise<any> => http.getFunc("/user/index"),
}