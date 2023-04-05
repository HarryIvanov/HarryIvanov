import { post } from './api.js';
import {html, render} from './node_modules/lit-html/lit-html.js'
import page from './node_modules/page/page.mjs'
import { updateNav } from './navigation.js';

const loginTemplate = () => html `
<section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`

export async function loginView() {
    const main = document.getElementById('site-content');
    render(loginTemplate(), main)
}

async function onSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = await post ('/users/login', {email, password});
    const userData = {
        id: data._id,
        email: data.email,
        password: data.password,
        accessToken: data.accessToken
    }
    sessionStorage.setItem('userData', JSON.stringify(userData));
    updateNav();
    page.redirect('/');
}

