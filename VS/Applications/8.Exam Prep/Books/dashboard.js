import { html, render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";
import { get } from "./api.js";


const homeTemplate = (data) => data ? html`
  <!-- Dashboard Page ( for Guests and Users ) -->
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    
    <ul class="other-books-list">
        ${data.map((book) => html`
        <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}" /></p>
        <a class="button" href=/details/${book._id}>Details</a>
      </li>
        `)}
    </ul>
    </section>` : html `
    <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <p class="no-books">No books in database!</p>
    </section>
    `

export async function dashboard() {
    let data = await get('/data/books?sortBy=_createdOn%20desc');
    console.log(data);
  render(homeTemplate(data), document.getElementById('site-content'));
}
