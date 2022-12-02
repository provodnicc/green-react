import React, { FC, useState} from "react";
import '../../ReactFormStyles.css'
import '../creditCalc.css';
import '../../tables.css';
import { useEffect } from "react";


interface CreditTable{
    credits: any
}


export const CreditTable: FC<CreditTable> = ({
    credits
}) => {
    const [rows, setRows] = useState(new Array<any>())
    
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
                        <td>от {perMonth} руб.</td>
                        <td title={overPayment}>от {overPayment} руб.</td>
                        <td>{rate}%</td>
                    </tr>
                )
            })
        )
    }

    useEffect(()=>{
        updateBankRows()
    },[credits])

    return(
        <div className="table-container">
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
            </table> 
        </div>
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