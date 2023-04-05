import page from './node_modules/page/page.mjs';
import {render} from './node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './src/views/layout.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { logout } from './src/data/auth.js';
import { homeView } from './src/views/home.js';
import { catalogView } from './src/views/catalog.js';
import { createMeme } from './src/views/create.js';
import { editView } from './src/views/edit.js';
import { profileView } from './src/views/myProfile.js';
import { detailsView } from './src/views/details.js';

// change root depending on HTML structure;
const root = document.querySelector('main');


page(decorateContext);
page ('/index.html', '/');
page('/', homeView)
page('/login', loginPage)
page('/register', registerPage)
page('/logout', logoutAction)
page('/catalog', catalogView)
page('/create', createMeme)
page('/edit/:id', editView)
page('/myProfile', profileView)
page('/details/:id', detailsView)


page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);

}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/')
}
