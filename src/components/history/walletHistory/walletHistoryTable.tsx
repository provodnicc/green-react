import React, { FC, useEffect, useState } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { Link } from "react-router-dom";
import { Routes } from '../../../enums/routes';
import { historyWallet } from "../../../API/HistoryService";
import { APIWallet } from "../../../types/Wallet";

interface WalletHistoryTable{

}


export const WalletHistoryTable: FC<WalletHistoryTable> = () => {
    const [row, setRow] = useState()
    let flag = true
    useEffect(()=>{
        if(flag){
            historyWallet.getAll().then(res=>{
                const ArrayDeposit = res.data
                const rows = ArrayDeposit.map((wallet: APIWallet, index:number) => {
                    const d = new Date(wallet.createdAt!)
                    return (
                        <tr key={index}>
                            <td title="date">{d.toLocaleString()}</td>
                            <td title="walletFrom">{wallet.walletFrom}</td>
                            <td title="valueFrom">{wallet.startValue}</td>
                            <td title="walletTo">{wallet.walletTo}</td>
                            <td title="valueTo">{wallet.finishValue}</td>
    
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
                window.location.replace(Routes.WalletLink)
                }}>
                Обратно к калькулятору
            </div>
            <div className="table-container">
                <table className="wallet-history-table">
                    <thead>
                        <tr>
                            <th title="date">Дата</th>
                            <th title="walletFrom">Из валюты</th>
                            <th title="valueFrom">Перевести</th>
                            <th title="walletTo">В валюту</th>
                            <th title="valueTo">Результат</th>
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
