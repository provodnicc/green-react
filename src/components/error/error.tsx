import React, { FC } from "react";

interface ErrorProps{
    error:string
}

export const Error: FC<ErrorProps> = ({error})=>{
    return (
        <>
            {error}
        </>
    )
}

