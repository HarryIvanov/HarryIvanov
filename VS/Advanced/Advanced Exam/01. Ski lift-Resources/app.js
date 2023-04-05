window.addEventListener("load", solve);

function solve() {
  const fname = document.getElementById("first-name");
  const lname = document.getElementById("last-name");
  const people = document.getElementById("people-count");
  const date = document.getElementById("from-date");
  const days = document.getElementById("days-count");
  const nextBtn = document.getElementById("next-btn");
  const list = document.querySelector(".ticket-info-list");
  const list2 = document.querySelector('.confirm-ticket');
  const main = document.getElementById('main');
  const body = document.getElementById('body');

  nextBtn.addEventListener("click", Next);

  function Next(e) {
    e.preventDefault();

    if (
      fname.value == "" ||
      lname.value == "" ||
      people.value == "" ||
      date.value == "" ||
      days.value == ""
    ) {
      return;
    }
    const li = document.createElement("li");
    li.setAttribute("class", "ticket");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    h3.textContent = `Name: ${fname.value} ${lname.value}`;
    p1.textContent = `From date: ${date.value}`;
    p2.textContent = `For ${days.value} days`;
    p3.textContent = `For ${people.value} people`;
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    li.appendChild(article);
    const editBtn = document.createElement("button");
    const continueBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    continueBtn.textContent = "Continue";
    editBtn.setAttribute("class", "edit-btn");
    continueBtn.setAttribute("class", "continue-btn");
    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    list.appendChild(li);

    const _fname = fname.value;
    const _lname = lname.value;
    const _people = people.value;
    const _date = date.value;
    const _days = days.value;

    fname.value = "";
    lname.value = "";
    people.value = "";
    date.value = "";
    days.value = "";

    editBtn.addEventListener("click", Edit);
    continueBtn.addEventListener("click", Continue);
    nextBtn.disabled = true;
    function Edit() {
      li.remove();
      fname.value = _fname;
      lname.value = _lname;
      people.value = _people;
      date.value = _date;
      days.value = _days;
      nextBtn.disabled = false;
    }
    function Continue() {
        li.remove()
        const li2 = document.createElement('li');
        li2.setAttribute('class', 'ticket-content');
        li2.appendChild(article)
        const confirmBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        confirmBtn.textContent = "Confirm";
        cancelBtn.textContent = "Cancel";
        confirmBtn.setAttribute('class', 'confirm-btn');
        cancelBtn.setAttribute('class', "cancel-btn");
        li2.appendChild(confirmBtn);
        li2.appendChild(cancelBtn);
        list2.appendChild(li2);
        confirmBtn.addEventListener('click', Confirm);
        cancelBtn.addEventListener('click', Cancel);
        
        function Cancel () {
            li2.remove();
            nextBtn.disabled = false;
        }
        function Confirm () {
            const h1 = document.createElement('h1');
            h1.setAttribute('id', 'thank-you');
            h1.textContent = "Thank you, have a nice day!";
            const backBtn = document.createElement('button');
            backBtn.textContent = "Back";
            backBtn.setAttribute('id', 'back-btn');
            backBtn.addEventListener('click', Reload)
            main.remove();
            body.appendChild(h1);
            body.appendChild(backBtn)

        }
    }
    function Reload () {
        location.reload()
    }
    
  }
}
