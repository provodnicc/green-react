import React, { useState } from 'react';

import './App.css';
import './fonts/fonts.css'

import { Header } from './components/header/header';
import { CreditCalcForm } from './components/creditCalc/creditCalc';
import { WalletConverterForm } from './components/walletConverter/walletConverter';
import { DepositCalcForm } from './components/depositCalc/depositCalc';
import { Profile } from './components/profile/profile';

import { User } from './types/User';
import { HeaderLink } from './enums/header.enum';

function App() {
  const [activeLinkState, setActiveLink] = useState<HeaderLink>(HeaderLink.WalletConverter)
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
      case HeaderLink.WalletConverter: 
        setActiveLink(HeaderLink.WalletConverter)
        break
      case HeaderLink.CreditCalc: 
        setActiveLink(HeaderLink.CreditCalc)
        break
      case HeaderLink.DepositCalc: 
        setActiveLink(HeaderLink.DepositCalc)
        break
    }
  }

  return (
    <div className="App">
      <Header user={user} onClick={clickHandler} active={activeLinkState}/>
      
      { 
        activeLinkState === HeaderLink.WalletConverter ?
            <WalletConverterForm/>: null
      }

      { 
        activeLinkState === HeaderLink.CreditCalc ?
            <CreditCalcForm/>: null
      }

      { 
        activeLinkState === HeaderLink.DepositCalc ?
          <DepositCalcForm/>: null
      }
    </div>
  );
}

export default App;
