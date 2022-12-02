import { makeObservable, makeAutoObservable } from "mobx"
import { AuthService } from "../API/AuthService"
import { User } from '../types/User'
const initialUser = {
    email:'',
    imageUrl: 'https://avatars.dzeninfra.ru/get-yapic/0/0-0/islands-small'
}

class UserStore {
    user: User
    constructor(){
        const userStr = localStorage.getItem('user')
        const user = userStr? JSON.parse(userStr): initialUser
        this.user = user
        makeAutoObservable(this)
    }

    save(user: User){
        if(!user.imageUrl)
            user.imageUrl = initialUser.imageUrl
        this.user = user
        localStorage.setItem('user', JSON.stringify(user))
    }

    refresh(){
        AuthService.refresh().then(res=>{
            
            localStorage.setItem('token', res.data.token)
            this.user.email = res.data.user.email
            if(!res.data.user.img){
                this.user.imageUrl = initialUser.imageUrl
            }else{
                this.user.imageUrl = res.data.user.img
            }
        })
    }
    
    async refreshAsync(){
        const res = await AuthService.refresh()
        localStorage.setItem('token', res.data.token)
        this.user.email = res.data.user.email
        if(!res.data.user.img){
            this.user.imageUrl = initialUser.imageUrl
        }else{
            this.user.imageUrl = res.data.user.img
        }
    }

    remove(){
            localStorage.removeItem('user')
            localStorage.removeItem('token')    
    
            AuthService.logout().then((res)=>{
                this.user = initialUser
            })
                
    }

    async removeAsync(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')    
        this.user = initialUser
        await AuthService.logout()

    }
}

export default new UserStore()