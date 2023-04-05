import page from './node_modules/page/page.mjs';
import { createView } from './createView.js';
import { dashboard } from './dashboard.js';
import { detailsView } from './detailsView.js';
import { editView } from './editView.js';
import { loginView } from './loginView.js';
import { myBooks } from './myBooks.js';
import { updateNav } from './navigation.js';
import { registerView } from './registerView.js';
import { logout } from './logout.js';

updateNav();
page('/index.html', "/");
page('/', dashboard);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/mybooks', myBooks);
page('/create', createView);
page('/logout', logout)
page.start()




