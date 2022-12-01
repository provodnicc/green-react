import React, { FC, useEffect, useState } from "react";
import '../../tables.css'


interface DepositTablePrpos{
    deposits: Array<any>
    organizations: Array<any>
}

export const DepositTable: FC<DepositTablePrpos> = ({
    deposits, organizations
}) => {
    const [tableRows, setTableRows] = useState(new Array<any>())

    function onLoadHandler(){
        
        const tableData: any = []
        for(let data in deposits){
            tableData.push(deposits[data])
        }

        setTableRows(tableData.map((row:any)=>{
            return(
                <tr key={row.id}>
					<td>
                        <a target="_blank" href={organizations[row.organization].contacts.website}>
                            {organizations[row.organization].name.full}
                        </a>
                    </td>
                    <td title={row.name}>{row.name}</td>
                    <td>{row.effectiveRate}</td>
                </tr>
            )
        }))
    }

    useEffect(()=>{
        onLoadHandler()
    },[deposits, organizations])

    return(
        <>
            <div className="table-container">
                {
                    tableRows.length ?
                    <table className="deposit-table">
                        <thead>
                            <tr>
                                <th title="Банк">Банк</th>
                                <th title="Тариф">Тариф</th>
                                <th title="Процентная ставка">Процентная ставка</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>:null
                }
            </div>
        </>
    )
}