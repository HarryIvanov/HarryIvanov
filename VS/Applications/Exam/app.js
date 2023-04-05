import page from './node_modules/page/page.mjs';
import {render} from './node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './src/views/layout.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { logout } from './src/data/auth.js';
import { homeView } from './src/views/home.js';
import { getFruits } from './src/views/catalog.js';
import { createFruit } from './src/views/create.js';
import { detailsView } from './src/views/details.js';
import { editFruit } from './src/views/edit.js';
import { searchPage } from './src/views/search.js';

// change root depending on HTML structure;
const root = document.querySelector('main');;


page(decorateContext);
page ('/index.html', '/');
page('/', homeView)
page('/login', loginPage)
page('/register', registerPage)
page('/logout', logoutAction)
page('/catalog', getFruits)
page('/create', createFruit)
page('/details/:id', detailsView)
page('/edit/:id', editFruit)
page('/search', searchPage)

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
