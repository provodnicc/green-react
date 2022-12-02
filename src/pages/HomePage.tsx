import React from "react";
import { Header } from "../components/header/header";
import { HeaderLink } from "../enums/header.enum";
import { Home } from "../components/Home/Home";
import userStore from '../store/User'
import { useEffect } from "react";
export const HomePage = () =>{
    return(
        <>
            
            <Header active={HeaderLink.Home}/>
            <Home/>
        </>
    )
}