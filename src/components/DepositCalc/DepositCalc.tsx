import { Button, Input, Loader, Select } from "@skbkontur/react-ui";
import React, { FC, useState } from "react";

import './DepositCalc.css';
import '../ReactFormStyles.css'; // Стили кастомизации реактовских элементов формы
import loading from '../../media/loading.gif'

import { DepositTable } from "./DepositTable/DepositTable";

import { DepositTerm, DepositTermPY, DepositTermType, DepositTermTypes } from "../../enums/term";
import { observer } from "mobx-react-lite";
import { historyDeposit } from "../../API/HistoryService";
export const DepositCalcForm = observer(() => {
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

    function onChangeDateIndexHandler(value: any){
        console.log(value)

    }

    async function sendData(){
        setLoaderState(true)
        const params = {
            'productName':"vklady",
            'groupLimit':'5',
            "limit":"1000",
            'sortProperty':'popularity',
            'sortDirection':'desc',
            'amount':String(sum),
            'term': DepositTermPY[date]// count days
        }
        try{
            await historyDeposit.create({
                amount: Number(params['amount']),
                term: String(DepositTermTypes.filter((term: DepositTermType)=>{
                    return DepositTerm[term] === date ? term : null 
                }))
            })
        }catch(e){
            console.log(e)
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

                    <select className="ReactSelect" onChange={(event)=>onChangeDateHandler(event.target.value)}>
                    {
                        Object.values(DepositTerm).map((str, index)=>
                            <option key={index} value={str}>{str}</option>
                        )
                    }
                    </select>

                    
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
})