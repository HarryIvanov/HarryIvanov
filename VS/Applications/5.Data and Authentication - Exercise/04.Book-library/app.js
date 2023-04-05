let loadBtn = document.querySelector("#loadBooks");
let url = "http://localhost:3030/jsonstore/collections/books";
let tbody = document.getElementsByTagName("tbody")[0];
let form = document.getElementsByTagName("form")[0];

loadBtn.addEventListener("click", loadBooks);

async function loadBooks() {
  try {
    let res = await fetch(url);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error);
    }
    let data = await res.json();
    let entries = Object.entries(data);
    tbody.innerHTML = "";

    for (const [key, { author, title }] of entries) {
      const tr = document.createElement("tr");
      const titleTd = document.createElement("td");
      titleTd.textContent = title;
      const authorTd = document.createElement("td");
      authorTd.textContent = author;

      tr.appendChild(titleTd);
      tr.appendChild(authorTd);

      let td = document.createElement("td");
      let editBtn = document.createElement("button");
      let delBtn = document.createElement("button");

      editBtn.textContent = "Edit";
      delBtn.textContent = "Delete";
      editBtn.addEventListener("click", editBook);
      delBtn.addEventListener("click", delBook);

      td.appendChild(editBtn);
      td.appendChild(delBtn);
      tr.appendChild(td);
      tbody.appendChild(tr);
      async function editBook(e) {
        document.getElementsByTagName('h3')[0].textContent = "Edit FORM";
        let res = await fetch(`${url}/${key}`);
        let data = await res.json();
        document.querySelector("[name='author']").value = data.author
        document.querySelector("[name='title']").value = data.title
        
        await fetch (`${url}/${key}`), {
            method: "PUT",
            headers: {'Content type': 'application/json'},
            body: {
                author: document.querySelector("[name='author']").value,
                title: document.querySelector("[name='title']").value
            }
        }
      }
      async function delBook(e) {
        fetch(`${url}/${key}`, {
            method: "DELETE"
        })
        tr.remove();
      }
    }
  } catch (error) {
    alert(error.message);
  }
}
form.addEventListener("submit", addBook);

async function addBook(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  const infoArr = [...formData.values()];
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        author: infoArr[1],
        title: infoArr[0],
        
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error);
    }
    e.target.reset()
    loadBooks();
  } catch (error) {
    alert(error.message);
  }
}


