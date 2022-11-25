import React, {FC, useState, useEffect} from "react";
import { WalletNames, WalletFormSelect } from "./walletFormSelect";
import { WalletFormInput } from "./walletFormInput";
import { Wallet } from "../../../types/Wallet";

import "./walletForm.css";
interface WalletForm{

}

const defaultWalletName:WalletNames = {
	name: "",
	value: 0
}

export const WalletForm: FC<WalletForm> = ({}) => {
	/* SELECTS  */
	const [walletNames, setWalletNames] = useState<string[]>([]);
	const [fromWalletSelected, setFromWalletSelected] = useState<WalletNames>(defaultWalletName);
	const [toWalletSelected, setToWalletSelected] = useState<WalletNames>(defaultWalletName);


	/* INPUTS  */
	const [fromInputValue, setFromInputValue] = useState<string>("");
	const [toInputValue, setToInputValue] = useState<string>("");


	/* WALLET */
	const [val1, setVal1] = useState<Wallet | null>(null);
	const [val2, setVal2] = useState<Wallet | null>(null);
	

	/* Загрузка списка валют */
	function fetchWalletNames(){
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(resp => resp.json())
            .then(resp => {
				let arr = ["Российский рубль (RUB)"];
                for(let val in resp.Valute){
                    const name = resp.Valute[val].Name + " (" + resp.Valute[val].CharCode + ")";
					arr.push(name);
                }
				setWalletNames(arr);
            })
            .catch(error => console.log(error));

    }
	/* Загрузка данных о валютах */
	function valuteCalculAfterSelection(){
		
			fetch("https://www.cbr-xml-daily.ru/daily_json.js")
			.then(resp => resp.json())
			.then(resp => {
				if(fromWalletSelected.value === 0 || toWalletSelected.value === 0){
					for (let el in resp.Valute){
						if (fromWalletSelected.value === 0 && toWalletSelected.value !== 0){
							if (resp.Valute[el].CharCode === toWalletSelected.name){
								setVal2(resp.Valute[el]);
								setVal1(null);
								break;
							}
						}
						else if(toWalletSelected.value === 0 && fromWalletSelected.value !== 0){
							if (resp.Valute[el].CharCode === fromWalletSelected.name){
								setVal1(resp.Valute[el]);
								setVal2(null);
								break;
							}
						}
						else{
							setVal2(null);
							setVal1(null);
							break;
						}
					}
				}else{
					for (let el in resp.Valute){
						if (resp.Valute[el].CharCode === toWalletSelected.name) setVal2(resp.Valute[el]);
						if (resp.Valute[el].CharCode === fromWalletSelected.name) setVal1(resp.Valute[el]);
					}
				}
				
			})
	}
	/* Вычисление значения валюты */
	function calculValute(){
		if (val1 === val2){
			setToInputValue(fromInputValue);
		}else if(val1 === null && val2 !== null){
			setToInputValue("" + (val2.Nominal*Number(fromInputValue))/val2.Value);
		}
		else if (val1 !== null && val2 === null){
			setToInputValue("" + (val1.Value*Number(fromInputValue))/val1.Nominal);
		}
		else if(val1 !== null && val2 !== null){
			const rubs = (val1.Value*Number(fromInputValue))/val1.Nominal;
			setToInputValue("" + (val2.Nominal*rubs)/val2.Value);
		}
	}

	useEffect(()=>{
		fetchWalletNames();
	}, []);

	useEffect(()=>{
		calculValute();
	}, [fromInputValue, val1, val2]);
	useEffect(()=>{
		valuteCalculAfterSelection();
	}, [toWalletSelected, fromWalletSelected]);
	
	
    return (
        <>
        <div className="wallet-form-container">
			<div className = "row">
				<label>Валюта 1:</label>
				<WalletFormSelect names={walletNames} onChange={setFromWalletSelected}/>

				<label>Сумма:</label>
				<WalletFormInput val={fromInputValue} onChange={setFromInputValue} readonly={false}/>
			</div>
		
			<div className = "row">
				<label>Валюта 2:</label>
				<WalletFormSelect names={walletNames} onChange={setToWalletSelected}/>

				<label>Сумма:</label>
				<WalletFormInput val={toInputValue} onChange={setToInputValue} readonly={true}/>
			</div>
		</div>
        </>
    )
}