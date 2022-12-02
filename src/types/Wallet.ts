
export interface Wallet{
    NumCode: string
    CharCode: string
    Name: string
    Nominal: number
    Previous: number
    Value: number
}

export interface APIWallet{
    walletFrom: string
    walletTo: string
    startValue: number 
    finishValue: number
    createdAt?: Date
}