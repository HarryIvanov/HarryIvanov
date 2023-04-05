import page from "./node_modules/page/page.mjs";
import { updateNav } from "./navigation.js";
import {get} from "./api.js";


export async function logout() {
    await get('/users/logout');
    sessionStorage.clear()
    updateNav();
    page.redirect('/');
}