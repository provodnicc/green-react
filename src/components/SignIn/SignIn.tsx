import React, {useState} from "react";
import { Button } from "@skbkontur/react-ui"
import '../../components/ReactFormStyles.css'
import './SignIn.css';
import { AuthService } from "../../API/AuthService";
import { UserLogin } from "../../types/User";
import znak from '../../media/znak.svg'
import { observer } from "mobx-react-lite";
import userStore from '../../store/User'
import { Routes } from "../../enums/routes";

export const SignIn = observer(() => {
    const [register, setRegister] = useState<UserLogin>(() => {
        return {
            email: "",
            password: ""
        }
    })

    const [login, setLogin] = useState<UserLogin>(() => {
        return {
            email: "",
            password: ""
        }
    })

    const [state, setState] = useState(false)

    const changeInputRegister = (event:any):void => {
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const changeInputLogin = (event:any):void => {
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    async function signUpHandler(){
        const res = await AuthService.SignUp(register)
        if(res){
            setState(!state)
        }
    }

    async function signInHandler(){
        const res = await AuthService.SignIn(login)
        const token = res.data
        localStorage.setItem('token', token)
        userStore.save({...login, imageUrl: ''})
        window.location.replace(Routes.WalletLink)
    }

    function oauthClick(){
        window.location.replace(
            "https://oauth.yandex.ru/authorize?response_type=token&client_id=e961a55c58e340b7a555e70dd7d9136b", 
        )
    }
    const Yandex = (
        <div className="YaButton Yandex" onClick={oauthClick} >
            <span>Или войти с помощью</span>
            <img width="20px" src={znak} alt="Yandex"/>
        </div>
    )

    const Registration = (
        <div className='Register'>
            <h2>Регистрация</h2>
            <input
                name="email"
                placeholder='Почта'
                value = {register.email}
                onChange = {changeInputRegister}
              />
            <input
                name="password"
                type='password'
                placeholder='Пароль'
                value = {register.password}
                onChange = {changeInputRegister}
             />
            <Button className="ReactButton" onClick={signUpHandler}>Зарегистрироваться</Button>
            {Yandex}
            <span className="changeAuthReg"><div onClick={()=> setState(!state)}>Нажмите здесь, если у вас уже есть аккаунт</div></span> 
        </div>
    )


    const Login = (
        <div className='Register'>
            <h2>Авторизация</h2>
            <input
                name="email"
                placeholder='Почта'
                value = {login.email}
                onChange = {changeInputLogin}
              />
            <input
                name="password"
                type='password'
                placeholder='Пароль'
                value = {login.password}
                onChange = {changeInputLogin}
             />
                <Button className="ReactButton" onClick={signInHandler}>Войти</Button>
                {Yandex}

                <span className="changeAuthReg"><div onClick={()=> setState(!state)}>Нажмите здесь, если у вас ещё нет аккаунта</div></span> 
        </div>
    )

    const TEST = <Button onClick={async ()=>{
        const res= await AuthService.refresh()
        console.log(res)
    }}> refresh Token</Button>

    return(
        <div className="AuthContainer">
            {
                state? Login : Registration
            }

            {TEST}


        </div>
    )
})