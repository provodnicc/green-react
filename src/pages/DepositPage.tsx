import React from "react";
import { DepositCalcForm } from "../components/DepositCalc/DepositCalc";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";

export const DepositPage = () =>{
    return(
        <>
            <Header active={HeaderLink.DepositCalc}/>
            <DepositCalcForm/>
        </>
    )
}