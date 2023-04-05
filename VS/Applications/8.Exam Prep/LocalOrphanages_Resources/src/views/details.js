import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import { get, del } from "../data/api.js";

const detailsTemplate = (data, isOwner, isLoggedIn, onDelete) => html`
     <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${
                          data.imageUrl
                        }" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${data.title}</h2>
                        <p class="post-description">Description: ${
                          data.description
                        }</p>
                        <p class="post-address">Address: ${data.address}</p>
                        <p class="post-number">Phone number: ${data.phone}</p>
                        <p class="donate-Item">Donate Materials: 0</p>
                        ${
                          isOwner == true 
                            ? html`<div class="btns">
                                <a href="/edit/${data._id}" class="edit-btn btn"
                                  >Edit</a
                                >
                                <a
                                @click=${onDelete}
                                  href="javascript:void(0)"
                                  class="delete-btn btn"
                                  >Delete</a
                                >
                              </div>`
                            : null
                        } ${isLoggedIn == true && isOwner == false ? html `<a href="#" class="donate-btn btn">Donate</a>
                        </div>` : null}
                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const data = await get(`/data/posts/${id}`);
  let isOwner = false;
  let isLoggedIn = false;
  const checkData = getUserData();
  if (checkData) {
    isLoggedIn = true;
    if (checkData._id == data._ownerId) {
      isOwner = true;
    }
  }
  ctx.render(detailsTemplate(data, isOwner, isLoggedIn, onDelete));

  async function onDelete () {
    const coice = confirm('Are you sure you want to delete this?');
    if (coice) {
        await del(`/data/posts/${id}`);
        ctx.page.redirect('/')
    }
  }
}
