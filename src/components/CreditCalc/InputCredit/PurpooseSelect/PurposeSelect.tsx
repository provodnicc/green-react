import React from "react";
import '../../../ReactFormStyles.css'
import{
    PurposeType,
    purposeTypeTitles,
    purposeTypes
} from "../../../../enums/purpose"

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
       <select className="ReactSelect" onChange={(event) => onChange(purposeTypes[Number(event.target.value)])}>
                {
                    items.map((str, index)=>
                        <option key={index} value={value != null ? index : PurposeType.Money}>{str[1]}</option>
                    )
                }
        </select>
    );
};