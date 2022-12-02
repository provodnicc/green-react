import { config } from '../config'
import { OauthUser, UserLogin } from '../types/User'
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
        return await $auth.delete('/logout')
    }

    static async refresh(){
        return await $auth.get('/refresh')
    }

    static async oauth(oauth: OauthUser){
        return await $auth.post('/yandex', oauth)
    }
}
// $auth.interceptors()