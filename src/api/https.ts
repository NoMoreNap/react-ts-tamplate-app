import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

class WB {
    url: string;
    api: AxiosInstance|number;
    instanse: AxiosInstance;
    tokenName: string

    constructor (url: string) {
        this.tokenName = 'token'
        this.url = url
        this.instanse = axios.create({baseURL: `https://${this.url}`})
        this.api = axios.create({baseURL: `https://${this.url}`}).interceptors.request.use(async (config) =>
            {
                const token = Cookies.get(this.tokenName)
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config
            }
        )
    }

    get localTokenName () {
        return this.tokenName
    }


}

export let 
            URL = '', 
            DEV_URL = '',
            PROD_URL = ''

switch (process.env['REACT_APP_MODE']) {
    case 'dev':
        URL = DEV_URL
        break;
    case 'prod':
        URL = PROD_URL
        break;
    default:
        URL = DEV_URL
        break;
}


export const WBApi = new WB(URL)
