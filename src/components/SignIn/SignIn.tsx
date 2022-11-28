import React, {useState} from "react";
import { Button } from "@skbkontur/react-ui"
import '../ReactFormStyles.css'
import './SignIn.css';



export const SignIn =() => {
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: ""
        }
    })

    const [login, setLogin] = useState(() => {
        return {
            username: "",
            password: ""
        }
    })

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

    const Registration = (
        <div className='Register'>
            <input 
                name="username"
                placeholder='Логин'
                value = {register.username}
                onChange = {changeInputRegister}
            />
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
                <Button className="ReactButton">Регистрация</Button>
                <span><a href ='#'>Войти</a></span> 
        </div>
    )

    const Login = (
        <div className='Login'>
            <input 
                name="username"
                placeholder='Логин'
                value = {login.username}
                onChange = {changeInputLogin}
            />
            <input
                name="password"
                type='password'
                placeholder='Пароль'
                value = {login.password}
                onChange = {changeInputLogin}
             />
                <Button className="ReactButton">Войти</Button>
                <span><a href ='#'>Регистрация</a></span> 
        </div>
    )

    return(
        <>
            {Registration}
            {Login}
        </>
    )
}