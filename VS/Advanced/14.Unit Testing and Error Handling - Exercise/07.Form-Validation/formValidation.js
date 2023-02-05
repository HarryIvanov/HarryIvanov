function validate() {
    
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let company = document.getElementById("company");
    let companyNumber = document.getElementById("companyNumber");
    let submit = document.getElementById("submit");
    let valid = document.getElementById("valid");
    let companyInfo = document.getElementById('companyInfo');
    let companyCheck = document.getElementById("company")
    let textTemplate = /[a-zA-Z0-9]{3,20}/;
    let emailTemplate = /[\w]+[@]+[\w]+[.]+[\w]+/;
    let passTemplate = /[\w\W]{5,15}/;
    let cmpnyNumberTemplate = /[1-9][0-9][0-9][0-9]/
    let usrName = false;
    let eml = false;
    let passCheck = false;
    let checked = false;
    let isOk = false;
        
    submit.addEventListener("submit", subm)
    companyCheck.addEventListener("change", add)

        function add (e) {
        if (e.target.checked == true) {
            companyInfo.style.display = "block"
            valid.style.display = "none"
            checked = true;
        } else {
            companyInfo.style.display = "none"
        }
        }
    function subm (e) {
        e.preventDefault();

        let pass1 = password.value;
        let pass2 = confirmPassword.value;
        let pssCheck = passTemplate.exec(pass1);

        if (pssCheck && pass1 && pass2 && pass1 == pass2){
            passCheck = true;
            password.style.border = "none";
            console.log(pass1);
            confirmPassword.style.borderColor = "";
        } else {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        }

        let text = username.value;
        let userNameCheck = textTemplate.exec(text);
        if (!userNameCheck && !text) {
            username.style.borderColor = "red";
        } else {
            username.style.border = "none";
            usrName = true; 
        } 
        let mail = email.value;
        let mailCheck = emailTemplate.exec(mail);
        if (mail && mailCheck) {
            eml = true;
            email.style.border = "none";
        } else {
            email.style.borderColor = "red";
        }
        
        let cmn = companyNumber.value;
        let cmnCheck = cmpnyNumberTemplate.exec(cmn);
        if (checked && cmnCheck) {
            companyNumber.style.border = "none";
            isOk = true;
        } else {
            companyNumber.style.borderColor = "red";
        } 

        if (isOk && eml && usrName && passCheck && checked) {
            valid.style.display = "block"
        } else if (eml && usrName && passCheck && !checked) {
            valid.style.display = "block"
        } else {
            valid.style.display = "none"
        }
        
    }
}
