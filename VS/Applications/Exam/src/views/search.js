import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../data/api.js";

const fruitTemplate = (fruit) => html`
  
    ${fruit
      ? html`
          <div class="fruit">
            <img src="${fruit.imageUrl}" alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">
              ${fruit.description}
            </p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
        `
      : html``}
  </div>
`;

const searchTemplate = (fruitList, ctx) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form @submit=${e => onSearch(e, ctx)} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
    ${fruitList.length == 0 ? html`<p class="no-result">No result.</p>` : fruitList.map(fruit => fruitTemplate(fruit) )}
    </div>
    
  </section>
`;

async function onSearch(event, ctx) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const query = formData.get('search').trim();

    ctx.page.redirect(`/search?query=${query}`);
}
export async function searchPage(ctx) {

    const fruit = ctx.querystring.split('=')[1];
    const fruitList = fruit == undefined ? [] : await search(fruit);
    render(searchTemplate(fruitList, ctx), document.querySelector('main'));
}

async function search(query) {
    return await get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
  }