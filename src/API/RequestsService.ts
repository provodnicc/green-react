import { IndexAPI } from ".";
import { config } from "../config";
import {Request} from "../enums/purpose"

const $requests = IndexAPI(config.REQUESTS)

class RequestsService{
    async getBanks(request:Request){
        // new URLSearchParams(JSON.stringify(request))
        return await $requests.get(`/key/data-for-table?amount=${request.amount}&term=${request.term}&purpose=${request.purpose}`)
    }
}

export default new RequestsService()