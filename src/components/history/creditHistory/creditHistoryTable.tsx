import React, { FC, useEffect, useState } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { termTypeTitles, termTypes, TermType} from '../../../enums/term';
import { purposeTypeTitles, purposeTypes, PurposeType } from '../../../enums/purpose';
import { Link } from "react-router-dom";
import { Routes } from '../../../enums/routes';
import { historyCredit } from "../../../API/HistoryService";
import { Credit } from "../../../types/Credit";





export const CreditHistoryTable = () => {
    const [row, setRow]= useState()
    let flag = true
    useEffect(()=>{
        if(flag){

            historyCredit.getAll().then(res=>{
                const ArrayDeposit = res.data
                const rows = ArrayDeposit.map((credit: Credit, index:number) => {
                    const d = new Date(credit.createdAt!)
                    return (
                        <tr key={index}>
                            <td title="date">{d.toLocaleString()}</td>
                            <td title="amount">{credit.amount} ₽</td>
                            <td title="purpose">{purposeTypeTitles[credit.purpose]}</td>
                            <td title={credit.term}>{termTypeTitles[credit.term]}</td>
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
                window.location.replace(Routes.CreditLink)
            }}>
                Обратно к калькулятору
            </div>
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
                       {row}
                    </tbody>
                </table> 
            </div>
        </>
    )
}