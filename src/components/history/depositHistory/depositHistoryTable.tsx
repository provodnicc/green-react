import React, { useEffect, useState } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { Link } from "react-router-dom";
import { Routes } from '../../../enums/routes';
import { Deposit } from "../../../types/deposit";
import { historyDeposit } from "../../../API/HistoryService";
import { DepositTermPYNames } from "../../../enums/term";





export const DepositHistoryTable = () => {
    const [row, setRow] = useState(new Array<any>())
    let flag = true
    useEffect(()=>{
        if(flag){
            historyDeposit.getAll().then(res=>{
                const ArrayDeposit = res.data
                const rows = ArrayDeposit.map((deposit: Deposit, index:number) => {
                    const d = new Date(deposit.createdAt!)
                    return (
                        <tr key={index}>
                            <td title="date">{d.toLocaleString()}</td>
                            <td title="amount">{deposit.amount} ₽</td>
                            <td title={deposit.term}>{DepositTermPYNames[deposit.term]}</td>
                        </tr>
                    )
                });
                setRow(rows)
                })
                flag=!flag
        }
        },[])


    return(
        <>
            <div className="ReactLink" onClick={()=>{
                window.location.replace(Routes.DepositLink)
            }}>
                Обратно к калькулятору
            </div>
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