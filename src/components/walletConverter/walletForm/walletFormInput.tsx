import React, {FC, useState, useEffect} from "react";

export interface IWalletFormInput{
    val: string;
    onChange: (inptStr: string) => void;
    readonly: boolean;
}



export const WalletFormInput: FC<IWalletFormInput> = ({val, onChange, readonly}) => {

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        let inptStr = event.target.value;
        if (!inptStr.match(/[0-9]/) || inptStr.match(/^[0.*]/)) inptStr = "";
        onChange(inptStr);
    }

    return (
        <>
            {
                readonly ?
                    <input className="inputWallet"onChange={handleInput} value={val} readOnly placeholder="0"/> 
                    :
                    <input className="inputWallet"onChange={handleInput} value={val} placeholder="0"/>
            }
            
        </>
    )
}