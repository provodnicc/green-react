import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";
export const HistoryDepositPage =() =>{
    const ArrayAmountStr = localStorage.getItem('ArrayAmount')
    const ArrayAmount = ArrayAmountStr? JSON.parse(ArrayAmountStr!): new Array<any>()
    return(
        <>
            <Header mode={HeaderLink.History} active={HeaderLink.DepositCalcHistory }/>
            История deposit
        {
            ArrayAmount.map((amount: any) => {
                return(
                    <> 
                    Сумма:{amount[0]}
                    Срок: {amount[1]}
                    </>
                )

            })
        }


        </>
    )
}