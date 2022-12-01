import React, { FC } from "react";
import { User } from "../../types/User";
import './profile.css';
import { Link } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import userSore from '../../store/User'
interface ProfileProps {
    user: User
}

export const Profile: FC<ProfileProps> = observer(({user}) => {
    return (
    <div className="ProfileBlock" >
        <div className="listItem">
            {user.email}
        </div> 
        <div className="listItem">
            <Link to="/history/wallet">История</Link>
        </div> 
        <div  className="listItem exit" onClick={()=>{
            userSore.remove()
        }}>
            Выход
        </div>
    </div>
    )
})