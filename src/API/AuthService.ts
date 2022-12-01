import { config } from '../config'
import { UserLogin } from '../types/User'
import { IndexAPI } from './index'


const $auth = IndexAPI(config.API_AUTH+'/auth')

export class AuthService{
    static async SignUp(user: UserLogin){
        return await $auth.post('/sign-up', user)
    }

    static async SignIn(user: UserLogin){
        return await $auth.post('/sign-in', user)
    }

    static async logout(){
        return await $auth.get('/logout')
    }

    static async refresh(){
        return await $auth.get('/refresh')
    }

    async oauth(){
        return 
    }
}
// $auth.interceptors()