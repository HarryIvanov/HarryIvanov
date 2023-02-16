window.addEventListener("load", solve);

function solve() {
  const fname = document.getElementById("first-name");
  const lname = document.getElementById("last-name");
  const age = document.getElementById("age");
  const title = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const story = document.getElementById("story");
  const publish = document.getElementById("form-btn");
  const list = document.getElementById("preview-list");
  const main = document.getElementById("main");
  const sideWrapper = document.getElementById("side-wrapper");
  const formWrapper = document.querySelector(".form-wrapper");


  publish.addEventListener("click", Publish);

  function Publish(e) {
    e.preventDefault();

    if (
      fname.value == "" ||
      lname.value == "" ||
      age.value == "" ||
      title.value == "" ||
      genre.value == "" ||
      story.value == ""
    ) {
      return;
    }
    const li = document.createElement("li");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const saveBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    li.setAttribute("class", "story-info");
    saveBtn.setAttribute("class", "save-btn");
    editBtn.setAttribute("class", "edit-btn");
    deleteBtn.setAttribute("class", "delete-btn");

    h4.innerText = `Name: ${fname.value} ${lname.value}`;
    p1.innerText = `Age: ${age.value}`;
    p2.innerText = `Title: ${title.value}`;
    p3.innerText = `Genre: ${genre.value}`;
    p4.innerText = `${story.value}`;
    saveBtn.textContent = "Save";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    const _fname = fname.value;
    const _lname = lname.value;
    const _age = age.value;
    const _title = title.value;
    const _story = story.value;

    fname.value = "";
    lname.value = "";
    age.value = "";
    title.value = "";
    story.value = "";

    saveBtn.addEventListener("click", Save);
    editBtn.addEventListener("click", Edit);
    deleteBtn.addEventListener("click", Delete);

    function Edit() {
      publish.disabled = false;
      li.remove();
      fname.value = _fname;
      lname.value = _lname;
      age.value = _age;
      title.value = _title;
      story.value = _story;
    }
    function Save() {
      formWrapper.remove();
      sideWrapper.remove();
      const h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!"
      main.appendChild(h1)
      
    }
    function Delete() {
      li.remove();
      publish.disabled = false;
      
    }

    publish.disabled = true;
  }
}
