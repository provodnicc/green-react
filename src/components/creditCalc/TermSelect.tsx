import React from "react";
import '../ReactFormStyles.css'
import{
    TermType,
    termTypeTitles,
    termTypes
} from "../../enums/term"
import {Select} from "@skbkontur/react-ui"

export interface TermSelectProps{
    value: TermType | null;
    onChange: (value: TermType | null) => void;
}

const items: Array<[TermType, string]> = [
    ...termTypes.map<[TermType, string]>(x => [x, termTypeTitles[x]])
];

export const TermSelect: React.FC<TermSelectProps> = ({
    value,
    onChange
}) => {
    return(
        <select className="ReactSelect" onChange={(x:any) => onChange(x)}>
                {
                    items.map((str, index)=>
                        <option value={value != null ? value[index] : TermType.P1Y}>{str[1]}</option>
                    )
                }

        </select>
        /*<Select
            className = "ReactSelect"
            items = {items}
            value = {value != null ? value : TermType.P1Y}
            onValueChange = {(x:any) => onChange(x)}
        />*/
    );
};