import React, { useState } from "react";
import { useEffect } from "react";
import { Error } from "../components/error/error";
import { config } from "../config";

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
        fetch(config.OAUTH_YANDEX + token)
            .then( res => res.json())
            .then( res => {
                    fetch( config.API_AUTH +'/auth/oauth' ,{
                        method: 'post',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify({
                            email: res.default_email,
                            image: `https://avatars.yandex.net/get-yapic/${res.default_avatar_id}/islands-small`,
                            // oauth: Oauth.YANDEX,
                            token: token
                        })
                    })
                        .catch(e => {
                            console.log(e)
                            setError(e)
                        })
            }).then(res=>{
                // window.location.replace('/')
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