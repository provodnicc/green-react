import React, { FC, useEffect, useState } from "react";
import { HeaderLink } from "../../enums/header.enum";
import './header.css'
import { Link } from "react-router-dom";
import { User } from "../../types/User";
import { Profile } from "../profile/profile";
import { Routes } from "../../enums/routes";
import userStore from '../../store/User'
import { observer } from "mobx-react-lite";
import { AuthService } from "../../API/AuthService";
interface HeaderProps{
    active: HeaderLink,
    mode?: HeaderLink.History | HeaderLink.Home
}



export const Header: FC<HeaderProps> = observer(({active, mode}) => {
    const [showProfile, setShowProfile] = useState(false)
    let flag = true

    useEffect(()=>{
        if(flag) {
            userStore.refresh()
                flag = !flag
        }
    },[])

    const user = userStore.user

    const Calcs = (
        /* Выбор пути */
        mode !== HeaderLink.History?
            <div className="calcs">
                 {
                    active === HeaderLink.Home ? 
                        <Link to={Routes.HomeLink} className={"HomeLink Link active"}>{HeaderLink.Home}</Link>:
                        <Link to={Routes.HomeLink} className={"HomeLink Link"}>{HeaderLink.Home}</Link>
                }
                {
                    active === HeaderLink.WalletConverter ? 
                        <Link to={Routes.WalletLink} className={"WalletLink Link active"}>{HeaderLink.WalletConverter}</Link>:
                        <Link to={Routes.WalletLink} className={"WalletLink Link"}>{HeaderLink.WalletConverter}</Link>
                }
                {
                    active === HeaderLink.CreditCalc ?
                    <Link to={Routes.CreditLink} className="CreditLink Link active">{HeaderLink.CreditCalc}</Link>:
                    <Link to={Routes.CreditLink} className="CreditLink Link">{HeaderLink.CreditCalc}</Link>
                }
                {
                    active === HeaderLink.DepositCalc ?
                        <Link to={Routes.DepositLink} className="DepositLink Link active">{HeaderLink.DepositCalc}</Link>:
                        <Link to={Routes.DepositLink} className="DepositLink Link">{HeaderLink.DepositCalc}</Link>
                }
            </div>: 
            <div className="history-calcs">
                {
                    active === HeaderLink.Home ? 
                        <Link to={Routes.HomeLink} className={"HomeLink Link active"}>{HeaderLink.Home}</Link>:
                        <Link to={Routes.HomeLink} className={"HomeLink Link"}>{HeaderLink.Home}</Link>
                }
                {
                    active === HeaderLink.CreditCalcHistory ?
                        <Link to={Routes.HistoryCreditLink} className="CreditLink Link active">{HeaderLink.CreditCalcHistory}</Link>:
                        <Link to={Routes.HistoryCreditLink} className="CreditLink Link">{HeaderLink.CreditCalcHistory}</Link>
                }
                {
                    active === HeaderLink.DepositCalcHistory ?
                        <Link to={Routes.HistoryDepositLink} className="DepositLink Link active">{HeaderLink.DepositCalcHistory}</Link>:
                        <Link to={Routes.HistoryDepositLink} className="DepositLink Link">{HeaderLink.DepositCalcHistory}</Link>
                }
            </div>
    )

    const ProfileBlock = (
        <div onClick={profileClick} className="Profile">
            <div className="ProfileLink Link">
                <span>{HeaderLink.Profile}</span>
                <img src={user.imageUrl}/>
            </div>
            {showProfile? <Profile />: null}
        </div>
    )

    const SignIn = (
        <Link to={Routes.SignInLink} className="SignInLink Link">{HeaderLink.SignIn}</Link>
    )

    function profileClick(){
        setShowProfile(!showProfile)
    }

    return (
        <header>
            {Calcs}
            {user.email ? ProfileBlock: SignIn}
        </header>
    )
})