import { html } from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../../util.js'
import { get } from '../data/api.js'

const searchTemplate = (data) => html `
     <section id="search">
          <h2>Search by Brand</h2>

          <form class="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          <div id="search-container">
            <ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
              <li class="card">
                <img src="./images/travis.jpg" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">Air Jordan</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">1 Retro High TRAVIS SCOTT</span>
                </p>
                <p><strong>Value:</strong><span class="value">2000</span>$</p>
                ${data !== null ? html `
                <a class="details-btn" href="/details">Details</a>
                ` : null}
              </li>
            </ul>

            <!-- Display an h2 if there are no posts -->
            <!-- <h2>There are no results found.</h2> -->
          </div>
        </section>
`
export async function searchView (ctx) {
    const data = getUserData();
    ctx.render(searchTemplate())
    
    console.log(data);
}