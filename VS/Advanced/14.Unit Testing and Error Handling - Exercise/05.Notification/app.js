function notify(message) {
  let btn = document.getElementById("notification");;
  btn.textContent = message;
  btn.style.display = "block"
  btn.addEventListener("click", click);

  function click () {
    btn.style.display = "none"
  }
}