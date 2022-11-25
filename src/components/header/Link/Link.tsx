import React, { FC } from "react";

import './Link.css'

interface LinkProps{
    onClick: Function,
    active?: boolean,
    className: string,
    children?: React.ReactNode
}

export const Link: FC<LinkProps> = ({
    onClick,
    active,
    className,
    children
}) =>{
    const Link = active ? 
        <div onClick={(e)=>onClick(e.target)} className={className + " activeLink"}>{children}</div> : 
        <div onClick={(e)=>onClick(e.target)} className={className}>{children}</div> 
    
    return Link
}