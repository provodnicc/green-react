import { DepositTermType } from "../enums/term"


export interface Deposit{
    amount: number
    term: DepositTermType | string
    createdAt?: Date
}
