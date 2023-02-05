function validate() {

    let input = document.getElementById("email")
    
    input.addEventListener("change", command);
    let check = /[a-z]+[@][a-z]+[.][a-z]+$/
    function command (e) {
        e.preventDefault();
        let text = input.value;
        let select = check.exec(text);
        if (select) {
            input.classList = "none"
        } else {
            input.classList = "error"
        }
    }
    
}