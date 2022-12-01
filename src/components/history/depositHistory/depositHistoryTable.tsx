import React, { useEffect, useState } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { Link } from "react-router-dom";
import { Routes } from '../../../enums/routes';
import { Deposit } from "../../../types/deposit";
import { historyDeposit } from "../../../API/HistoryService";





export const DepositHistoryTable = () => {
    const [row, setRow] = useState(new Array<any>())

    useEffect(()=>{
        historyDeposit.getAll().then(res=>{
            const ArrayDeposit = res.data
            const rows = ArrayDeposit.map((deposit: Deposit, index:number) => {
                return (
                    <tr key={index}>
                        <td title="date">{deposit.createdAt.toString()}</td>
                        <td title="amount">{deposit.amount} ₽</td>
                        <td title={deposit.term}>{deposit.term}</td>
                    </tr>
                )
            });
            setRow(rows)
            })
        },[])


    return(
        <>
            <div className="ReactLink"><Link  to={Routes.DepositLink}>Обратно к калькулятору</Link></div>
            <div className="table-container">
                <table className="deposit-history-table">
                    <thead>
                        <tr>
                            <th title="Дата">Дата</th>
                            <th title="Сумма">Сумма</th>
                            <th title="Срок">Срок</th>
                      </tr>
                    </thead>
                    <tbody>
                       {row}
                    </tbody>
                </table> 
            </div>
        </>
    )
}