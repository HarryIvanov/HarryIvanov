window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const checkIn = document.getElementById("date-in");
  const checkOut = document.getElementById("date-out");
  const guests = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", next);
  const info = document.querySelector("ul[class='info-list']");
  const confirmation = document.querySelector("ul[class='confirm-list']");
  const complete = document.getElementById("complete-reservation");
  let verification = document.getElementById("verification");

  function next(e) {
    e.preventDefault();
    if (
      firstName.value == "" ||
      lastName.value == "" ||
      checkIn.value == "" ||
      checkOut.value == "" ||
      guests.value == "" ||
      new Date(checkIn.value) > new Date(checkOut.value)
    ) {
      return;
    }

    let liElement = document.createElement("li");
    liElement.setAttribute("class", "reservation-content");
    let liArticle = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
    let p1 = document.createElement("p");
    p1.textContent = `From date: ${checkIn.value}`;
    let p2 = document.createElement("p");
    p2.textContent = `To date: ${checkOut.value}`;
    let p3 = document.createElement("p");
    p3.textContent = `For ${guests.value} people`;
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", edit);
    let continueBtn = document.createElement("button");
    continueBtn.setAttribute("class", "continue-btn");
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", contin);
    liArticle.appendChild(h3);
    liArticle.appendChild(p1);
    liArticle.appendChild(p2);
    liArticle.appendChild(p3);

    liElement.appendChild(liArticle);

    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);
    info.appendChild(liElement);

    let nameSave = firstName.value;
    let secondNameSave = lastName.value;
    let checkInSave = checkIn.value;
    let checkOutSave = checkOut.value;
    let guestsSave = guests.value;

    firstName.value = "";
    lastName.value = "";
    checkIn.value = "";
    checkOut.value = "";
    guests.value = "";

    nextBtn.disabled = true;

    function edit() {
      liElement.remove();
      firstName.value = nameSave;
      lastName.value = secondNameSave;
      checkIn.value = checkInSave;
      checkOut.value = checkOutSave;
      guests.value = guestsSave;
      nextBtn.disabled = false;
    }

    function contin() {
      liElement.remove();
      let liConfirmation = document.createElement('li');
      liConfirmation.setAttribute('class', "confirm-list");
      liConfirmation.appendChild(liArticle)
      let cancelBtn = document.createElement("button");
      let confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirm";
      confirmBtn.setAttribute("class", "confirm-btn");
      cancelBtn.textContent = "Cancel";
      cancelBtn.setAttribute("class", "cancel-btn");
      confirmBtn.addEventListener("click", confi);
      cancelBtn.addEventListener("click", cancel);
      liConfirmation.appendChild(confirmBtn);
      liConfirmation.appendChild(cancelBtn);
      editBtn.remove();
      continueBtn.remove();
      confirmation.appendChild(liConfirmation);
      function confi() {
        liConfirmation.remove();
        verification.setAttribute("class", "reservation-confirmed");
        verification.textContent = "Confirmed.";
        nextBtn.disabled = false;
      }
      function cancel() {
        liConfirmation.remove();
      verification.setAttribute("class", "reservation-cancelled");
      verification.textContent = "Cancelled.";
      nextBtn.disabled = false;
    }

    }
    
    
  }
}
