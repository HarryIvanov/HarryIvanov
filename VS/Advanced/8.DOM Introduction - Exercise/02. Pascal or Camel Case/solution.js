function solve() {
    let text = document.getElementById("text").value;
    const convention = document.getElementById("naming-convention").value;
    let result = ""

    if (convention == "Camel Case") {
      words = text.split(" ");
      firstWord = words.shift().toLowerCase();
      for (let el of words) {
        words[words.indexOf(el)] = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      }
      result = firstWord + words.join("")
    } else if (convention == "Pascal Case") {
      let words = text.split(" ")
      for (let el of words) {
        words[words.indexOf(el)] = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      }
      result = words.join("");
    } else {
      result = "Error!"
    }
    document.getElementById("result").textContent = result
}