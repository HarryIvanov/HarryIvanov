import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import {get} from '../data/api.js'

const myPostsTemplate = (data) => html `
    <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            ${data.length > 0 ? html `
            <div class="my-posts">
                ${data.map(element => html `
                <div class="post">
                    <h2 class="post-title">${element.title}</h2>
                    <img class="post-image" src="${element.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${element._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
                `)}
                
            </div>
            ` : html `
            <h1 class="title no-posts-title">You have no posts yet!</h1>
            `} 
        </section>
`
export async function myPostsView (ctx) {
    const userId = getUserData()._id
    const data = await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    ctx.render(myPostsTemplate(data))
}