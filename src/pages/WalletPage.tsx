import React from "react";
import { Header } from "../components/header/header";
import { WalletForm } from "../components/walletConverter/walletForm/walletForm";
import { WalletConverterTable } from "../components/walletConverter/walletTable";
import { HeaderLink } from "../enums/header.enum";



export const WalletPage = () =>{
    return(
        <>
            <Header active={HeaderLink.WalletConverter}/>
            <WalletForm/>
            <WalletConverterTable/>
        </>
    )
} 