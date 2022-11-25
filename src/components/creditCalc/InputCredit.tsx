import React from "react";
import { CurrencyInput } from "@skbkontur/react-ui"
import { PurposeType, Request } from "../../enums/purpose"
import { TermType } from "../../enums/term"
import { PurposeSelect } from "./PurposeSelect"
import { TermSelect } from "./TermSelect"
import './InputCredit.css';
import '../ReactFormStyles.css'

export interface InputProps{
    request: Request;
    onChange: (request:Request) => void;
}

export class InputCredit extends React.Component<InputProps>{
    render():React.ReactNode{
        return(
               
        <>  <div className="input-credit-container">    
                <div className="row">
                    <div className="column">
                        <span>Сумма кредита:</span>
                        <CurrencyInput 
                            rightIcon={'₽'}
                            fractionDigits={0}
                            value={this.props.request.amount}
                            onValueChange={this.handleCreditSumChange}
                            className="ReactInput"
                        />
                    </div>
                    <div className="column">
                        <span>Цель кредита:</span>
                        <PurposeSelect
                            value ={this.props.request.purpose}
                            onChange={this.handleCreditPurposeChange}
                       />
                    </div>
                </div>
                <div className="row">
                    <span>Желаемый срок кредита:</span>
                    <TermSelect
                        value ={this.props.request.term}
                        onChange={this.handleCreditTermChange}
                    />
                </div>
            </div>
        </>
    )
    

    }//Поправить типизацию
    private handleCreditSumChange = (amount: any): void =>{
        this.props.onChange({...this.props.request, amount});
    };

    private handleCreditPurposeChange = (purpose: PurposeType | null): void =>{
        this.props.onChange({...this.props.request, purpose});
    };

    private handleCreditTermChange = (term: TermType | null): void =>{
        this.props.onChange({...this.props.request, term});
    };
}