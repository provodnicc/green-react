import { makeAutoObservable } from "mobx"
import { historyDeposit } from "../API/HistoryService"
import { Deposit } from "../types/deposit"

const initialDeposit = {
    amount: 0,
    term: '',
    createdAt: new Date()
}
class DepositHistory {
    deposits: Deposit[] = [initialDeposit]

    constructor(){
        this.getAll()
        makeAutoObservable(this)
    }

    save(deposit: Deposit){
        historyDeposit.create(deposit).then((res)=>{
            this.deposits = res.data
        })
    }

    getAll(){
        historyDeposit.getAll().then((res)=>{
            
            this.deposits = res.data
        })
    }


    remove(id: number){
        historyDeposit.remove(id).then(()=>{
            this.getAll()
        })
    }

}

export default new DepositHistory()