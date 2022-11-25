import React, { useState } from "react";
import { useEffect } from "react";

function getToken(){
    const url = window.location.href
    const urlParam = url.split('#')[1]
    const urlSearchParams = new URLSearchParams(urlParam)
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.access_token
}


export const YandexOauth = ()=>{
    const [error, setError] = useState('')

    function setYandexSession(){
        const token = getToken()
            fetch(`https://login.yandex.ru/info?format=json&oauth_token=${token}`)
            .then( res => res.json())
            .then( res => {
                localStorage.setItem(
                    'userEmail', 
                    res.default_email
                )
                localStorage.setItem(
                    'userImage', 
                    `https://avatars.yandex.net/get-yapic/${res.default_avatar_id}/islands-small`
                )
            window.location.replace('/')

            })
            .catch(e => setError(e.massage))
    }


    useEffect(()=>{
        setYandexSession()
    },[])
        
    
    return (<>
    {error? error: null}
    </>)
} 