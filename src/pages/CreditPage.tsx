import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";
import { CreditCalc } from "../components/CreditCalc/CreditCalc";


export const CreditCalcPage = () => {

    return(
        <>
            <Header active={HeaderLink.CreditCalc} />
            <CreditCalc/>
        </>
    )
}