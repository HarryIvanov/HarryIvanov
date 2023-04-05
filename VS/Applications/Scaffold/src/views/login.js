import {html} from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../../util.js';
import { login } from '../data/auth.js';


const loginTemplate = (onLogin) => html `
<h1>Login Page</h1>
<form @submit=${onLogin}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <button>Login</button>
</form>
`

export function loginPage (ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin ({email, password}, form) {
        if (email == "" || password == "") {
            return alert("all fields are required")
        }
        await login(email, password)
        form.reset();
        ctx.page.redirect('/')
    }
}