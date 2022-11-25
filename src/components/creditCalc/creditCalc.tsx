import React, { FC, useState} from "react";
import { Button } from "@skbkontur/react-ui"
import '../ReactFormStyles.css'
import './creditCalc.css';
import loading from './loading.gif'
import {InputCredit} from "./InputCredit"
import {PurposeType, Request} from "../../enums/purpose"
import {TermType} from '../../enums/term'
import { useEffect } from "react";


interface CreditCalcProps{
    data?: string
}

const initialInput: Request ={
    amount: 30000,
    purpose: PurposeType.Money,
    // locationRoute: "6.83.",
    term: TermType.P1Y,
};

export const CreditCalcForm: FC<CreditCalcProps> = ({
    data
}) => {
    const [request, setRequest] = useState(initialInput);
    const [credits, setCredits] = useState(new Array<any>())
    const [rows, setRows] = useState(new Array<any>())
    const [loadingState, setLoadingState] = useState(false)
    
    const sendData = (request:any) =>{
        setLoadingState(true)
        const params = {
            "amount": String(request.amount),
            "purpose":request.purpose,
            "term": request.term
        }
        
        fetch('https://teeest.xyz/key/data-for-table?' + new URLSearchParams(params))
            .then((response) => response.json())
            .then((json) => {
                setCredits(json)
                setLoadingState(false)
            });
    }

   
    
    function updateBankRows(){
        credits.sort(function(a:any,b:any){
            return a.calculatedValues.rate.from - b.calculatedValues.rate.from;
        })
        setRows(
            credits.map((credit: any)=>{
                const rating = credit.organization.ratings.sravniRuRating
                const rate = credit.calculatedValues.rate.from
                const organization = credit.organization.name
                const organization_website = credit.organization.website
                const organization_logo_url = credit.organization.logo
                const perMonth = credit.calculatedValues.perMonth
                const overPayment = credit.calculatedValues.overpayment
                const tarif = credit.name
                return(
                    <tr key={credit.id}>
                        <td>{rating}</td>
                        <td>
                            <a href={organization_website}>
                                <img width="90px" src={organization_logo_url} alt="logo"/>
                            </a> 
                        </td>
                        <td>
                            <a href={organization_website} title={organization}>{organization}</a>
                        </td>
                        <td title={tarif}>{tarif}</td>
                        <td>{perMonth} руб.</td>
                        <td title={overPayment}>{overPayment} руб.</td>
                        <td>{rate}</td>
                    </tr>
                )
            })
        )
    }

    useEffect(()=>{
        updateBankRows()
    },[credits])
    return(
        <>
            <div className="input-credit-form">
                <InputCredit request={request} onChange={setRequest}/>
                <Button className="ReactButton" onClick={()=>sendData(request)}>Найти банки</Button>
            </div>
            {
                rows.length && !loadingState?
                <table className="credit-table">
                    <thead>
                        <tr>
                            <th title="">Надёжность</th>
                            <th></th>
                            <th title="Банк">Банк</th>
                            <th title="Тариф">Тариф</th>
                            <th title="Выплата в месяц">Выплата в месяц</th>
                            <th title="Переплата">Переплата</th>
                            <th title="Ставка">Ставка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>: 
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