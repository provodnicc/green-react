import React, { useState } from "react";
import { useEffect } from "react";
import { AuthService } from "../API/AuthService";
import { Error } from "../components/error/error";
import { config } from "../config";

function getToken(){
    const url = window.location.href
    const urlParam = url.split('#')[1]
    const urlSearchParams = new URLSearchParams(urlParam)
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.access_token
}
// set all to backend

export const YandexOauth = ()=>{
    const [error, setError] = useState('')

    function setYandexSession(){
        const token = getToken()
        fetch(config.OAUTH_YANDEX + token)
            .then( res => res.json())
            .then( res => {
                const body = {
                    email: res.default_email,
                    img_id: String(res.default_avatar_id),
                    // oauth: Oauth.YANDEX,
                    token: token
                }
                AuthService.oauth(body).then(res=>{
                    // setTimeout(()=>{window.location.replace('/')}, 500)
                    window.location.replace('/')
                })
            }).then(res=>{
                
            })
            .catch(e => {
                console.log(e)
                setError(e.massage)})
    }


    useEffect(()=>{
        setYandexSession()
    },[])
        
    
    return (<>
    {error? <Error error={error}/>: null}
    </>)
} 