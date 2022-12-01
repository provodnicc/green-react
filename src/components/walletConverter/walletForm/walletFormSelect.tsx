import React, {FC, useState, useEffect} from "react"; 


export interface WalletNames{
    name: string;
	value: number;
}
export interface IWalletFormSelect{
    names: string[];
    onChange: (value: WalletNames) => void;
}



export const WalletFormSelect: FC<IWalletFormSelect> = ({names, onChange}) => {

    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>){
        const regExp = /\(...\)/g;
        const results = event.target.innerHTML.match(regExp);
        const value = Number(event.target.value);
        let name = "RUB";
        if (results !== null){
            name = results[value].slice(1,4);
        }
        onChange({name, value});
    }

    return (
        <>
            <select className="ReactSelect" onChange={handleSelect}>
                {
                    names.map((str, index)=>
                        <option key={index} value={index}>{str}</option>
                    )
                }

            </select>
        </>
    )
}