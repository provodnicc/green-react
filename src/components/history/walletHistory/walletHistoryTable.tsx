import React, { FC } from "react";
import '../../ReactFormStyles.css'
import '../../tables.css';
import { Link } from "react-router-dom";
import { Routes } from '../../../enums/routes';

interface WalletHistoryTable{

}


export const WalletHistoryTable: FC<WalletHistoryTable> = () => {

    return(
        <>
            <div className="ReactLink"><Link  to={Routes.WalletLink}>Обратно к каклькулятору</Link></div>
            
        </>
    )
}
