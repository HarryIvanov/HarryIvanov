import {html} from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../../util.js';
import { register } from '../data/auth.js';


const registerTemplate = (onRegister) => html `
<h1>Register Page</h1>
<form @submit=${onRegister}>
    <label>Register: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat: <input type="password" name="repass"></label>
    <button>Register</button>
</form>
`

export function registerPage (ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister ({email, password, repass}, form) {
        if (email == "" || password == "") {
            return alert("all fields are required")
        }
        if (password !== repass) {
            return alert('password mismatch')
        }
        await register(email, password)
        form.reset();
        ctx.page.redirect('/')
    }
}