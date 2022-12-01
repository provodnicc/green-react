import { makeObservable, makeAutoObservable } from "mobx"
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

    remove(){
        this.user = initialUser
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
}

export default new UserStore()