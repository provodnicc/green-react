import { Button, Input, Loader, Select } from "@skbkontur/react-ui";
import React, { FC, useState } from "react";

import './depositCalc.css';
import '../ReactFormStyles.css'; // Стили кастомизации реактовских элементов формы
import loading from './loading.gif'

import { DepositTable } from "./depositTable/depositTable";

import { DepositDateList } from "../../types/deposit";


interface DepositCalcProps{
    data?: string
}
const selectStyles = {
    fontSize: 20,

}
export const DepositCalcForm: FC<DepositCalcProps> = ({data}) => {
    const [sum, setSum] = useState('100000')
    const [date, setDate] = useState('1 год')
    const [deposits, setDeposits] = useState(new Array<any>())
    const [organizations, setOrganizations] = useState(new Array<any>())
    const [loaderState, setLoaderState] = useState(false)

    function onChangeSumHandler(value: any){
        setSum(value)
    }

    function onChangeDateHandler(value: any){
        setDate(value)
    }

    function sendData(){
        setLoaderState(true)
        const params = {
            'productName':"vklady",
            'groupLimit':'5',
            "limit":"1000",
            'sortProperty':'popularity',
            'sortDirection':'desc',
            'amount':String(sum),
            'term': DepositDateList[date]// count days
        }
        const stringParams = new URLSearchParams(params).toString()
        fetch("https://public.sravni.ru/v1/deposits/products?" + stringParams,{redirect:'follow'})
            .then(res => res.json())
            .then(res=>{
                setDeposits(res.items)
                setOrganizations(res.organizations)
                setLoaderState(false)
            })
            .catch(e=>{
                setLoaderState(false)
                
            })
    }

    return(
        <div className="container">
            <div className="deposit-info">
                <div className="column">
                    <span>Сумма вклада:</span>
                    <Input 
                        itemType="number" 
                        value={sum} 
                        onChange={(e)=>onChangeSumHandler(e.target.value)}
                        className="ReactInput"
                    />
                </div>
                <div className="column">
                    <span>Срок хранения</span>
                    <Select 
                        className="ReactSelect"
                        value={date} 
                        items={
                            Object.keys(DepositDateList)
                        } 
                        onValueChange={onChangeDateHandler}
                    />
                </div>
                
            </div>
            <Button className="ReactButton" onClick={sendData}>Найти</Button>
            {
                loaderState?
                    <div className="loading">
                        <img  src={loading} alt="loading"/>
                    </div>:
                    <>                    
                        <DepositTable organizations={organizations} deposits={deposits}/>
                    </>
            }
            

        </div>
    )
}