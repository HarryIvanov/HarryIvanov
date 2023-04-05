// change user object according to requirements
import {post, get} from './api.js'
import { clearUserData, setUserData } from '../../util.js';
const endpoints = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register'

}

export async function login (email, password) {
    const result = await post (endpoints.login, {email, password});
    setUserData (result);
}
export async function register (email, password) {
    const result = await post (endpoints.register, {email, password});
    setUserData (result);
}
export async function logout () {
    get(endpoints.logout);
    clearUserData();
}