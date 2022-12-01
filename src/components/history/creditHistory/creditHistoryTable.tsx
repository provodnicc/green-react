import React, { FC } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { termTypeTitles, termTypes, TermType} from '../../../enums/term';
import { purposeTypeTitles, purposeTypes, PurposeType } from '../../../enums/purpose';
import { Link } from "react-router-dom";
import { Routes } from '../../../enums/routes';



interface CreditHistoryTable{

}


export const CreditHistoryTable: FC<CreditHistoryTable> = () => {
    const ArrayCreditStr = localStorage.getItem('ArrayCredit');
    const ArrayCredit = ArrayCreditStr ? JSON.parse(ArrayCreditStr!) : new Array<any>();

    const rows = ArrayCredit.map((credit: any, index:number) => {
        const items: Array<[PurposeType, string]> = [
            ...purposeTypes.map<[PurposeType, string]>(x => [x, purposeTypeTitles[x]])
        ];
        const reason = items.find((e)=> e[0] === credit[2] ? e[1] : null);
        const years: Array<[TermType, string]> = [
            ...termTypes.map<[TermType, string]>(x => [x, termTypeTitles[x]])
        ];
        const year = years.find((e)=> e[0] === credit[3] ? e[1] : null);
        return (
            <tr key={index}>
               <td title={credit[0]}>{credit[0]}</td>
              <td title={credit[1]}>{credit[1]} ₽</td>
              <td title={credit[2]}>{reason![1]}</td>
              <td title={credit[3]}>{year![1]}</td>
            </tr>
        )
    });

    return(
        <>
            <div className="ReactLink"><Link  to={Routes.CreditLink}>Обратно к каклькулятору</Link></div>
            <div className="table-container">
                <table className="credit-history-table">
                    <thead>
                        <tr>
                        <th title="Дата">Дата</th>
                        <th title="Сумма">Сумма</th>
                            <th title="Цель">Цель</th>
                            <th title="Срок">Срок</th>
                      </tr>
                    </thead>
                    <tbody>
                       {rows}
                    </tbody>
                </table> 
            </div>
        </>
    )
}