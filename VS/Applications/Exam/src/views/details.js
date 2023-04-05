import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import { get, del } from "../data/api.js";

const detailsTemplate = (data, isOwner, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-title">${data.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${data.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${data.nutrition}</p>
        </div>
        ${(isOwner == true
          ? html`
              <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
              </div>
            `
          : null)}
      </div>
    </div>
  </section>
`;
export async function detailsView(ctx) {
  const id = ctx.params.id;
  const data = await get(`/data/fruits/${id}`);
  const checkUser = getUserData();
  let isOwner = false;

  if (checkUser) {
    if (checkUser._id == data._ownerId) {
      isOwner = true;
    }
  }
ctx.render(detailsTemplate(data, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete");
    if (choice) {
      await del(`/data/fruits/${id}`);
      ctx.page.redirect("/catalog");
    }
  }
}
