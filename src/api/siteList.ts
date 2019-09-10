import http from './server'
export default {
    getSiteList:(params:{
        page: number|string,
        size: number|string,
        searchType: string,
        searchValue: string,
        status: string,
    }):Promise<any> => http.getFunc("/site/list", params),

    siteUpdate:(params:{
        siteId:number[],
        status:number
    }):Promise<any> => http.postFunc("/site/update", params),
}