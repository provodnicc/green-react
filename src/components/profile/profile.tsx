import React, { FC } from "react";
import { User } from "../../types/User";
import './profile.css'

interface ProfileProps {
    user: User
}

export const Profile: FC<ProfileProps> = ({user}) => {
    return (
    <div className="ProfileBlock" >
        <div className="listItem">
            {user.email}
        </div> 
        <div  className="listItem exit" onClick={()=>{
            localStorage.removeItem('userEmail')
            localStorage.removeItem('userImage')
            window.location.reload()
        }}>
            Выход
        </div>
    </div>
    )
}