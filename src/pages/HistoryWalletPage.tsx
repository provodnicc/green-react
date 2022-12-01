import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";
import { WalletHistoryTable } from "../components/history/walletHistory/walletHistoryTable";

export const HistoryWalletPage = () =>{
    return(
        <>
            <Header mode={HeaderLink.History} active={HeaderLink.WalletConverterHistory }/>
            <WalletHistoryTable />
        </>
    )
}