import React, { FC } from "react";
import { User } from "../../types/User";
import './profile.css';
import { observer } from "mobx-react-lite";
import userStore from '../../store/User'
import { Routes } from "../../enums/routes";

export const Profile = observer(() => {
    return (
    <>
        <div className="page-shadow"></div>
        <div className="ProfileBlock" >
            
            <div className="close-button">
                <span>×</span>
            </div>
            <h2>Профиль</h2>
            <div className="listItem">
                {userStore.user.email}
            </div> 
            <div className="listItem" onClick={()=>{
                window.location.replace(Routes.HistoryCreditLink)
            }}>
                История
            </div> 
            <div  className="listItem exit" onClick={()=>{
                    userStore.removeAsync().then(()=>{
                        window.location.replace(Routes.WalletLink)
                    })
            }}>
                Выход
            </div>
        </div>
    </>
    )
})