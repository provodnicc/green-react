import React from "react";
import '../ReactFormStyles.css'
import{
    PurposeType,
    purposeTypeTitles,
    purposeTypes
} from "../../enums/purpose"
import {Select} from "@skbkontur/react-ui"

export interface PurposeSelectProps{
    value: PurposeType | null;
    onChange: (value: PurposeType | null) => void;
}

const items: Array<[PurposeType, string]> = [
    ...purposeTypes.map<[PurposeType, string]>(x => [x, purposeTypeTitles[x]])
];

export const PurposeSelect: React.FC<PurposeSelectProps> = ({
    value,
    onChange
}) => {
    return(
    
       <select className="ReactSelect" onChange={(x:any) => onChange(x)}>
                {
                    items.map((str, index)=>
                        <option value={value != null ? value[index] : PurposeType.Money}>{str[1]}</option>
                    )
                }

        </select>
        /*<Select
            className = "ReactSelect"
            items = {items}
            value = {value != null ? value : PurposeType.Money}
            onValueChange = {(x:any) => onChange(x)}
        /> */
        
    );
};