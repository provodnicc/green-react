import React, {FC} from "react";
import './walletConverter.css'
import { WalletConverterTable } from "./walletTable/walletTable";
import { WalletForm } from "./walletForm/walletForm";

interface WalletConverterFormProp{

}


export const WalletConverterForm: FC<WalletConverterFormProp> = ({}) =>{
    return(
        <>
        <WalletForm/>
        <WalletConverterTable/>
        </>
    )
} 