import { IndexAPI } from ".";
import { config } from "../config";
import {Request} from "../enums/purpose"

const $history = IndexAPI(config.API_HISTORY)

class RequestsService{
    async getBanks(request:Request){
        return await $history.get(`https://teeest.xyz/key/data-for-table?amount=${request.amount}&term=${request.term}&purpose=${request.purpose}`)
    }
}
'https://teeest.xyz/key/data-for-table?amount=1000000&term=P1Y&purpose=Money'