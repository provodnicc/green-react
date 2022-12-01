import React, { FC } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { termTypeTitles } from '../../../enums/term';
import { purposeTypeTitles, purposeTypes, PurposeType } from '../../../enums/purpose';



interface CreditTable{

}


export const CreditHistoryTable: FC<CreditTable> = () => {
    const ArrayCreditStr = localStorage.getItem('ArrayCredit');
    const ArrayCredit = ArrayCreditStr ? JSON.parse(ArrayCreditStr!) : new Array<any>();

    const rows = ArrayCredit.map((credit: PurposeType, index:number) => {
        return (
            <tr key={index}>
               <td title={credit[0]}>{credit[0]}</td>
              <td title={credit[1]}>{credit[1]} ₽</td>
              <td title={credit[2]}>{credit[2]}</td>
              <td title={credit[3]}>{credit[3]}</td>
            </tr>
        )
    });

    return(
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
    )
}