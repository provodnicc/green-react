import React, {FC, useState} from "react";
import './history.css'


import { Header } from '../header/header';
import { Profile } from '../profile/profile';

import { User } from '../../types/User';
import { HeaderLink } from '../../enums/header.enum';

interface HistoryProp{

}


export const History: FC<HistoryProp> = ({}) =>{
    const [activeLinkState, setActiveLink] = useState<HeaderLink>(HeaderLink.WalletConverterHistory)
    const [showProfile, setShowProfile]= useState(false)
  
    const email = localStorage.getItem('userEmail')
    const imageUrl = localStorage.getItem('userImage')

    const user: User = {
        email:'',
        imageUrl: ''
    }

    if(email){
        user.email = email
        user.imageUrl= imageUrl!
    
    }
  
  function clickHandler(value: any){
    const setedItem = String(value.textContent).trimEnd()
    switch(setedItem){
      case HeaderLink.WalletConverterHistory: 
        setActiveLink(HeaderLink.WalletConverterHistory)
        break
      case HeaderLink.CreditCalcHistory: 
        setActiveLink(HeaderLink.CreditCalcHistory)
        break
      case HeaderLink.DepositCalcHistory: 
        setActiveLink(HeaderLink.DepositCalcHistory)
        break
    }
  }
    return(
        <>
            <Header active={activeLinkState}/>
      
      { 
        activeLinkState === HeaderLink.WalletConverterHistory ?
            <p>1</p>: null
      }

      { 
        activeLinkState === HeaderLink.CreditCalcHistory ?
        <p>2</p> : null
      }

      { 
        activeLinkState === HeaderLink.DepositCalcHistory ?
            <p>3</p>: null
      }

        </>
    )
} 