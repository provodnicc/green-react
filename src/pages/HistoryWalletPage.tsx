import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";

export const HistoryWalletPage = () =>{
    return(
        <>
            <Header mode={HeaderLink.History} active={HeaderLink.WalletConverterHistory }/>
            История валюты
        </>
    )
}