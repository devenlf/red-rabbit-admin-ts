import http from './server'

export default {
    getUserInfo:() => http.getFunc("/user/index"),
}