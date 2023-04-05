import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import { get } from "../data/api.js";

const profileTemplate = (data, userData) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      ${userData.gender == "male"
        ? html`<img
            id="user-avatar-url"
            alt="user-profile"
            src="/images/male.png"
          />`
        : html`<img
            id="user-avatar-url"
            alt="user-profile"
            src="/images/female.png"
          />`}

      <div class="user-content">
        <p>Username: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <p>My memes count: ${data.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      ${data.length > 0
        ? html`
            ${data.map(
              (element) => html`
                <div class="user-meme">
                  <p class="user-meme-title">${element.title}</p>
                  <img
                    class="userProfileImage"
                    alt="meme-img"
                    src=${element.imageUrl}
                  />
                  <a class="button" href="/details/${element._id}">Details</a>
                </div>
              `
            )}
          `
        : html` <p class="no-memes">No memes in database.</p> `}
    </div>
  </section>
`;
export async function profileView(ctx) {
  const userData = getUserData();
  const userId = userData._id;
  const data = await get(
    `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
  ctx.render(profileTemplate(data, userData));
}
