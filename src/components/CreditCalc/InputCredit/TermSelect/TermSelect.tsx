import React from "react";
import '../../../ReactFormStyles.css'
import{
    TermType,
    termTypeTitles,
    termTypes
} from "../../../../enums/term"

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
        <select className="ReactSelect" onChange={(event) => onChange(termTypes[Number(event.target.value)])}>
                {
                    items.map((str, index)=>
                        <option key={index} value={index}>{str[1]}</option>
                    )
                }

        </select>
    );
};