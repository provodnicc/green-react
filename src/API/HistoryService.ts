import { IndexAPI } from ".";
import { config } from "../config";
import { HistoryEnum } from "../enums/history";
import { Credit } from "../types/credit";
import { Deposit, setDeposit } from "../types/deposit";
import { Wallet } from "../types/Wallet";

const $history = IndexAPI(config.API_HISTORY)

class HistoryCreditService{
    type: HistoryEnum
    constructor(type: HistoryEnum){
        this.type = type
    }

    async create(value: Credit | Wallet | Deposit|setDeposit){
        return await $history.post(this.type, value)
    }

    async getAll(){
        return await $history.get(this.type)
    }

    async getById(id: number){
        return await $history.get(this.type+'/'+id)
    }

    async update(id: number, value: Credit| Wallet | Deposit){
        return await $history.patch(this.type+'/'+id, value)
    } 

    async remove(id:number){
        return await $history.delete(this.type+'/'+id)
    }
}

const historyCredit = new HistoryCreditService(HistoryEnum.Credits)
const historyDeposit = new HistoryCreditService(HistoryEnum.Deposits)
const historyWallet = new HistoryCreditService(HistoryEnum.Wallet)

export {
    historyCredit,
    historyDeposit,
    historyWallet
}