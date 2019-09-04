
interface EnvCurrent {
    VUE_APP_BASEURL:string,
    VUE_APP_UPLOAD_BASEURL:string,
    VUE_APP_ADV_URL:string,
}

const development = {
    VUE_APP_BASEURL:'//test-chitu-admin-api.qttcs.cn',
    VUE_APP_UPLOAD_BASEURL:'//test-chitu-api.qttcs.cn',
    VUE_APP_ADV_URL:'//qa1-adv.qttcs.cn'
}

const preview = {
    VUE_APP_BASEURL:'//pre-chitu-admin-api.aiclk.com',
    VUE_APP_UPLOAD_BASEURL:'//pre-chitu-api.aiclk.com',
    VUE_APP_ADV_URL:'//staging.aiclk.com'
}

const production = {
    VUE_APP_BASEURL:'//chitu-admin-api.aiclk.com',
    VUE_APP_UPLOAD_BASEURL:'//chitu-api.aiclk.com',
    VUE_APP_ADV_URL:'//adv.aiclk.com'
}

export default function getCurrentEnv(env:string): EnvCurrent {
    if(env=="local" || env=="qa"){
        return development;
    }else if(env=="pre"){
        return preview;
    }else if(env=="prd"){
        return production;
    }else{
        return development;
    }
}