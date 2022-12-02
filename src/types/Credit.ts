import { PurposeType } from "../enums/purpose"
import { TermType } from "../enums/term"

export interface Credit{
    amount: number
    purpose: PurposeType
    term: TermType
    createdAt?: Date
}