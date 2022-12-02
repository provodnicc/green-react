import React, { useState} from "react";
import { Button } from "@skbkontur/react-ui"
import loading from '../../media/loading.gif'
import {PurposeType, Request} from "../../enums/purpose"
import {TermType} from '../../enums/term'
import { InputCredit } from "../../components/CreditCalc/InputCredit/InputCredit";
import { CreditTable } from "../../components/CreditCalc/CreditCalcTable/creditCalcTable";
import { historyCredit } from "../../API/HistoryService";


const initialInput: Request ={
    amount: 30000,
    purpose: PurposeType.Money,
    // locationRoute: "6.83.",
    term: TermType.P1Y,
};

export const CreditCalc = () => {
    const [request, setRequest] = useState(initialInput);
    const [credits, setCredits] = useState(new Array<any>())
    const [loadingState, setLoadingState] = useState(false)
    
    const sendData = (request:any) =>{
        setLoadingState(true)
        const params = {
            "amount": String(request.amount),
            "purpose":request.purpose,
            "term": request.term
        }
        historyCredit.create({
            amount: request.amount,
            purpose: request.purpose,
            term: request.term
        })
        const ArrayCreditStr = localStorage.getItem('ArrayCredit')
        const ArrayCredit = ArrayCreditStr ? JSON.parse(ArrayCreditStr!) : new Array<any>()
        const d = new Date();
        ArrayCredit.push([d.toLocaleString(), request.amount, request.purpose, request.term])
        localStorage.setItem('ArrayCredit', JSON.stringify(ArrayCredit))
        
        fetch('https://teeest.xyz/key/data-for-table?' + new URLSearchParams(params))
            .then((response) => response.json())
            .then((json) => {
                setCredits(json)
                setLoadingState(false)
            });
    }

    function inputHandler(value: Request){
        setRequest(value)
    }

    return(
        <>
            <div className="input-credit-form">
                <InputCredit request={request} onChange={inputHandler}/>
                <Button className="ReactButton" onClick={()=>sendData(request)}>Найти банки</Button>
            </div>
            {
                credits.length && !loadingState?
                    <CreditTable credits={credits}/>: 
                    loadingState? 
                        <div className="loading">
                            <img height="50vh" src={loading} alt="loading"/>
                        </div>: null
            }
        </>
    )
}


// https://www.sravni.ru/kredity/onlajn-zayavka-na-kredit/

// https://www.sravni.ru/kredity/provider/offers/credits/brief/
// POST: 
// {
//     "amount": 300000,    // сумма кредита s
//     "purpose": "Money",  // цель кредита
//     "term": "P1Y"        //срок кредита 1Y == 1 год
// }