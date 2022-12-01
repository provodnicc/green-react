import React from "react";
import { Header } from "../components/header/header";
import { SignIn } from "../components/SignIn/SignIn";
import { HeaderLink } from "../enums/header.enum";

export const SignInPage = () =>{
    return (
        <>
            <Header active={HeaderLink.SignIn}/>
            <SignIn/> 
        </>
    )
}