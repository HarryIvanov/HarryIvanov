function toggle() {
    const lol = document.getElementsByClassName("button")[0].textContent;
    
    

    if (lol == "More") {
        document.getElementById("extra").style.display = "block"
        document.getElementsByClassName("button")[0].textContent = "Less"
    } else {
        document.getElementById("extra").style.display = "none"
        document.getElementsByClassName("button")[0].textContent = "More"
    }
    

}    