import React, { FC, useEffect, useState } from "react";
import { Wallet } from "../../types/Wallet";


import '../tables.css';

interface WalletConverterTableProp{

}
const defaultWallet = [{
    NumCode: '',
    CharCode: '',
    Name: '',
    Nominal: 0,
    Previous: 0,
    Value: 0
}]

export const WalletConverterTable: FC<WalletConverterTableProp> = ({}) => {
    const [wallets, setWallets] = useState<Wallet[]>(defaultWallet)
    // const flag = true
    function fetchWallet(){
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(res=>res.json())
            .then(res=>{
                const walletsRes = res.Valute
                const data = []
                for(let wallet in walletsRes){
                    data.push(walletsRes[wallet])
                }
                setWallets(data)
            })
            .catch(e=>setWallets(defaultWallet))
    }


    useEffect(()=>{
        fetchWallet()
    },[])

	const Rows = wallets.map((wallet: Wallet)=>{
        return(
            <tr key={wallet.NumCode}>
                <td>{wallet.NumCode}</td>
                <td><a href="#">{wallet.CharCode}</a></td>
                <td>{wallet.Nominal}</td>
                <td title={wallet.Name}>{wallet.Name}</td>
                <td>{wallet.Value}</td>
            </tr>
        )
    })
    
    return(
		
        <div className="table-container">
            
			<table className="wallet-table">
			<thead>
				<tr>
					<th title="Шифр">Шифр</th>
					<th title="Букв. код">Букв. код</th>
					<th title="Единиц">Единиц</th>
					<th title="Валюта">Валюта</th>
					<th title="Курс">Курс</th>
				</tr>
			</thead>
			<tbody>
                {Rows}
		    </tbody>
	        </table>
        </div>
    )
}