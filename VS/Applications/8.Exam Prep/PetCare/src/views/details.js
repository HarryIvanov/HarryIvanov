import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import { get, del } from "../data/api.js";

const detailsTemplate = (data, isOwner, userLoged, onDelete) => html`
  <section id="detailsPage">
    <div class="details">
      <div class="animalPic">
        <img src="${data.image}" />
      </div>
      <div>
        <div class="animalInfo">
          <h1>Name: ${data.name}</h1>
          <h3>Breed: ${data.breed}</h3>
          <h4>Age: ${data.age}</h4>
          <h4>Weight: ${data.weight}</h4>
          <h4 class="donation">Donation: 0$</h4>
        </div>
        ${userLoged
          ? html`
              <div class="actionBtn">
                ${isOwner
                  ? html`
                      <a href="/edit/${data._id}" class="edit">Edit</a>
                      <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    `
                  : html`<a href="#" class="donate">Donate</a>`}
              </div>
            `
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const data = await get(`/data/pets/${id}`);
  const checkUser = getUserData();
  let isOwner = false;
  let userLoged = false;

  if (checkUser) {
    userLoged = true;
    if (checkUser._id == data._ownerId) {
      isOwner = true;
    }
  }
  ctx.render(detailsTemplate(data, isOwner, userLoged, onDelete));

  async function onDelete () {
    await del(`/data/pets/${id}`);
    ctx.redirect('/');
  }
}
