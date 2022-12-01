import { IndexAPI } from ".";
import { config } from "../config";

const $creditHistory = IndexAPI(config.API_HISTORY+'/credits')
const $depositHistory = IndexAPI(config.API_HISTORY+'/credits')
const $walletHistory = IndexAPI(config.API_HISTORY+'/credits')

class HistoryService{
    static async creditCreate(){
        
    }
}