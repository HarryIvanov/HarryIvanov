import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import {get, del} from '../data/api.js'

const detailsTemplate = (data, isOwner, onDelete, userId) => html `
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <p id="details-title">${data.title}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${data.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >${data.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${data.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            <!--Edit and Delete are only for creator-->
            ${isOwner == true ? html `
            <div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
              </div>
            ` : null}
            ${userId == undefined || isOwner == true ? null : html `
            <div id="action-buttons">
            <a href="javascript:void(0)" id="apply-btn">Apply</a>
            </div>
            `}
          </div>
        </section>
`

export async function detailsView (ctx) {
    const id = ctx.params.id
    
    const data = await get(`/data/offers/${id}`)
    const userId = await getUserData()
    let isOwner = false;
    if (userId) {
        const owner = data._ownerId
        if (userId._id == owner) {
            isOwner = true;
        }
        ctx.render(detailsTemplate(data, isOwner, onDelete, userId))
    } else {
        ctx.render(detailsTemplate(data, isOwner, onDelete))
    }
   
    
    async function onDelete() {
        await del(`/data/offers/${id}`);
        ctx.page.redirect('/catalog')
    }
    

}