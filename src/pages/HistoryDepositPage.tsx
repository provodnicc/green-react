import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";
import { DepositHistoryTable } from "../components/history/depositHistory/depositHistoryTable";
export const HistoryDepositPage =() =>{
    const ArrayAmountStr = localStorage.getItem('ArrayAmount')
    const ArrayAmount = ArrayAmountStr? JSON.parse(ArrayAmountStr!): new Array<any>()
    return(
        <>
            <Header mode={HeaderLink.History} active={HeaderLink.DepositCalcHistory }/>
            <DepositHistoryTable/>
        </>
    )
}