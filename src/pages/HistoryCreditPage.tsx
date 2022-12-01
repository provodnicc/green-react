import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";
import { CreditHistoryTable } from "../components/history/creditHistory/creditHistoryTable";

export const HistoryCreditPage = () =>{
    return(
        <>
            <Header mode={HeaderLink.History} active={HeaderLink.CreditCalcHistory }/>
            <CreditHistoryTable/>
        </>
    )
}