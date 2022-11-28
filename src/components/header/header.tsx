import React, { FC, useState } from "react";
import { HeaderLink } from "../../enums/header.enum";
import './header.css'
import znak from './znak.svg'
import { Link } from "./Link/Link";
import { User } from "../../types/User";
import { Profile } from "../profile/profile";
import { Routs } from "../../enums/routs";


interface HeaderProps{
    active: HeaderLink,
    user: User,
    onClick: Function,
    route?: Routs
}



export const Header: FC<HeaderProps> = ({active, user, onClick, route}) => {
    const [showProfile, setShowProfile] = useState(false)
    const Calcs = (
        /* Выбор пути */
        route === Routs.RouteApp ?
            <div className="calcs">
                {
                    active === HeaderLink.WalletConverter ? 
                        <Link onClick={onClick} active={true} className={"WalletLink"}>{HeaderLink.WalletConverter}</Link>:
                        <Link onClick={onClick} className={"WalletLink"}>{HeaderLink.WalletConverter}</Link>
                }
                {
                    active === HeaderLink.CreditCalc ?
                    <Link onClick={onClick} active={true} className="CreditLink">{HeaderLink.CreditCalc}</Link>:
                    <Link onClick={onClick} className="CreditLink">{HeaderLink.CreditCalc}</Link>
            }
            {
                active === HeaderLink.DepositCalc ?
                    <Link onClick={onClick} active={true} className="CreditLink">{HeaderLink.DepositCalc}</Link>:
                    <Link onClick={onClick} className="DepositLink">{HeaderLink.DepositCalc}</Link>
            }    
            </div>
        : 
        <div className="calcs">
                {
                    active === HeaderLink.WalletConverterHistory ? 
                        <Link onClick={onClick} active={true} className={"WalletLink"}>{HeaderLink.WalletConverterHistory}</Link>:
                        <Link onClick={onClick} className={"WalletLink"}>{HeaderLink.WalletConverterHistory}</Link>
                }
            {
                active === HeaderLink.CreditCalcHistory ?
                    <Link onClick={onClick} active={true} className="CreditLink">{HeaderLink.CreditCalcHistory}</Link>:
                    <Link onClick={onClick} className="CreditLink">{HeaderLink.CreditCalcHistory}</Link>
            }
            {
                active === HeaderLink.DepositCalcHistory ?
                    <Link onClick={onClick} active={true} className="CreditLink">{HeaderLink.DepositCalcHistory}</Link>:
                    <Link onClick={onClick} className="DepositLink">{HeaderLink.DepositCalcHistory}</Link>
            }    
            </div>
    )

    const ProfileBlock = (
        <div className="Profile">
            <Link onClick={profileClick} className="ProfileLink">
                <span>{HeaderLink.Profile}</span>
                <img src={user.imageUrl}/>
            </Link>
            {showProfile? <Profile user={user}/>: null}
        </div>
    )

    const SignIn = (
        <Link onClick={oauthClick} className="SignInLink">{HeaderLink.SignIn}<img src={znak} alt="Yandex"/></Link>
    )

    function oauthClick(){
        window.location.replace(
            "https://oauth.yandex.ru/authorize?response_type=token&client_id=e961a55c58e340b7a555e70dd7d9136b", 
        )
    }

    function profileClick(){
        setShowProfile(!showProfile)
    }

    return(
        <header>
            {Calcs}
            {user.email ? ProfileBlock: SignIn}
        </header>
    )
}