import { IndexAPI } from ".";
import { config } from "../config";
import { HistoryEnum } from "../enums/history";
import { Credit } from "../types/Credit";
import { Deposit } from "../types/deposit";
const $history = IndexAPI(config.API_HISTORY)

class HistoryCreditService{
    type: HistoryEnum
    constructor(type: HistoryEnum){
        this.type = type
    }

    async create(value: Credit | Deposit){

        return await $history.post(this.type, value)
    }

    async getAll(){
        return await $history.get(this.type)
    }

    async getById(id: number){
        return await $history.get(this.type+'/'+id)
    }

    async update(id: number, value: Credit | Deposit){
        return await $history.patch(this.type+'/'+id, value)
    } 

    async remove(id:number){
        return await $history.delete(this.type+'/'+id)
    }
}

const historyCredit = new HistoryCreditService(HistoryEnum.Credits)
const historyDeposit = new HistoryCreditService(HistoryEnum.Deposits)

export {
    historyCredit,
    historyDeposit,
}