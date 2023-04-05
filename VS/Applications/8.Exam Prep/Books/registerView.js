import { post } from './api.js';
import {html, render} from './node_modules/lit-html/lit-html.js'
import page from './node_modules/page/page.mjs'
import { updateNav } from './navigation.js';

const registerTemplate = () => html`
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`
export async function registerView () {
    render(registerTemplate(), document.getElementById('site-content'))
}

async function onSubmit (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('repeat-pass').value;
    if (password!== confirmPass) {
        alert('Passwords do not match');
        return;
    }
    if (password == "" || email == "") {
        alert('All fields are required');
        return;
    }
    const user = await post ('/users/register', {email, password})
    const userData = {
        id: user._id,
        email: user.email,
        accessToken: user.accessToken
      };
      sessionStorage.setItem('userData', JSON.stringify(userData))
      updateNav();
      page.redirect('/');
}



