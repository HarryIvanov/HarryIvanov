window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const title = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const story = document.getElementById("story");
  const output = document.getElementById("preview-list");
  const main = document.getElementById("main");
  const bod = document.querySelector(".body");

  const publish = document.querySelector("#form-btn");
  publish.addEventListener("click", add);

  function add() {
    if (firstName.value == ""
    || lastName.value == ""
    || age.value == ""
    || title.value == ""
    || genre.value == ""
    || story.value == "") {
      return
    }

  
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.textContent = "Delete Story";

    const saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "save-btn");
    saveBtn.textContent = "Save Story";

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit Story";

    let articleItem = document.createElement("article");
    let liElement = document.createElement("li");
    liElement.setAttribute("class", "story-info");

    let fullName = document.createElement("h4");
    fullName.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let ageNum = document.createElement("p");
    ageNum.textContent = `Age: ${age.value}`;

    let titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${title.value}`;
    let genreDocument = document.createElement("p");
    genreDocument.textContent = `Genre: ${genre.value}`;
    let storyDocument = document.createElement("p");
    storyDocument.textContent = story.value;
    articleItem.appendChild(fullName);
    articleItem.appendChild(ageNum);
    articleItem.appendChild(titleElement);
    articleItem.appendChild(genreDocument);
    articleItem.appendChild(storyDocument);

    liElement.appendChild(articleItem);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);
    output.appendChild(liElement);

    let name = firstName.value;
    let sName = lastName.value;
    let ageName = age.value;
    let titleName = title.value;
    let genreName = genre.value;
    let storyName = story.value;

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    title.value = "";
    genre.value = "";
    story.value = "";
    publish.disabled = true;

    deleteBtn.addEventListener("click", del);

    saveBtn.addEventListener("click", save);

    editBtn.addEventListener("click", edit);
    function edit() {
      publish.disabled = false;
      firstName.value = name;
      lastName.value = sName;
      age.value = ageName;
      title.value = titleName;
      genre.value = genreName;
      story.value = storyName;
      liElement.remove()
    }
    function del() {
      publish.disabled = false;
      liElement.remove()

    }
    function save() {
      const main2 = document.createElement('div');
      main2.setAttribute("id", "main");
      const h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!";
      main2.appendChild(h1)
      bod.appendChild(main2);
      main.remove();
  
    }
    
  }
  


  
}
