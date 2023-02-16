window.addEventListener("load", solve);

function solve() {
  const fname = document.getElementById("first-name");
  const lname = document.getElementById("last-name");
  const dateIn = document.getElementById("date-in");
  const dateOut = document.getElementById("date-out");
  const guests = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  const rlist = document.querySelector(".info-list");
  const clist = document.querySelector(".confirm-list");
  const verify = document.getElementById("verification");

  nextBtn.addEventListener("click", Next);

  function Next(e) {
    e.preventDefault();
    if (
      fname.value == "" ||
      lname.value == "" ||
      dateIn.value == "" ||
      dateOut.value == "" ||
      guests.value == ""
    ) {
      return;
    }
    const dIn = new Date (dateIn.value);
    const dOut = new Date (dateOut.value)
    if (dIn > dOut) {
      return;
    }
    const li1 = document.createElement("li");
    const article = document.createElement("article");
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const editBtn = document.createElement("button");
    const contBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    contBtn.textContent = "Continue";
    editBtn.setAttribute("class", "edit-btn");
    contBtn.setAttribute("class", "continue-btn");
    h3.textContent = `Name: ${fname.value} ${lname.value}`;
    p1.textContent = `From date: ${dateIn.value}`;
    p2.textContent = `To date: ${dateOut.value}`;
    p3.textContent = `For ${guests.value} people`;
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(contBtn);
    rlist.appendChild(li);
    //

    const _fname = fname.value;
    const _lname = lname.value;
    const _dateIn = dateIn.value;
    const _dateOut = dateOut.value;
    const _guests = guests.value;

    fname.value = "";
    lname.value = "";
    dateIn.value = "";
    dateOut.value = "";
    guests.value = "";

    editBtn.addEventListener("click", Edit);
    contBtn.addEventListener("click", Continue);

    function Edit() {
      nextBtn.disabled = false;
      fname.value = _fname;
      lname.value = _lname;
      dateIn.value = _dateIn;
      dateOut.value = _dateOut;
      guests.value = _guests;
      li.remove();
    }

    function Continue() {
      li.remove();
      const cbtn = document.createElement("button");
      const cancBtn = document.createElement("button");
      cbtn.textContent = "Confirm";
      cancBtn.textContent = "Cancel";
      cbtn.setAttribute("class", "confirm-btn");
      cancBtn.setAttribute("class", "cancel-btn");
      li1.appendChild(article);
      li1.appendChild(cbtn);
      li1.appendChild(cancBtn);

      clist.appendChild(li1);

      cbtn.addEventListener("click", Confirm);
      cancBtn.addEventListener("click", Cancel);
    }

    function Confirm() {
      verify.setAttribute("class", "reservation-confirmed");
      verify.textContent = "Confirmed.";
      li1.remove();
      nextBtn.disabled = false;
    }
    function Cancel() {
      verify.setAttribute("class", "reservation-cancelled");
      li1.remove();
      verify.textContent = "Cancelled.";
      nextBtn.disabled = false;
    }

    nextBtn.disabled = true;
  }
}
