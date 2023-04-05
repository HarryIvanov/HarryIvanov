import { html } from '../../node_modules/lit-html/lit-html.js'
import { get, put } from '../data/api.js'
import { createSubmitHandler } from '../../util.js'

const editTemplate = (data, onEdit) => html `
    <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${data.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${data.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${data.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${data.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${data.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${data.sales} />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`
export async function editView (ctx) {
    const id = ctx.params.id;
    const data = await get(`/data/albums/${id}`)
    console.log(data);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)))
    

    async function onEdit ({singer, album, imageUrl, release, label, sales}, form) {
        if (singer == "" || album == "" || imageUrl == "" || release == "" || label == "" || sales =="") {
            return alert('All fields are required')
        }
        const product = {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        }
        await put(`/data/albums/${id}`, product);

        form.reset();
        ctx.page.redirect('/catalog');
    }
}