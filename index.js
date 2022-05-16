
function  myToggle(menu){
    menu.classList.toggle("open");
}

function myFuction() {
    let m = document.getElementById("password");
    if ( m.type === "password" ) {
        m.type = "text";
        document.getElementById("show1").style.display = "inline-block"
        document.getElementById("hide1").style.display = "none"
    } else {
        m.type = "password";
        document.getElementById("show1").style.display = "none"
        document.getElementById("hide1").style.display = "inline-block"
    }
}

function myFuction2() {
    let m = document.getElementById("password2");
    if ( m.type === "password" ) {
        m.type = "text";
        document.getElementById("show2").style.display = "inline-block"
        document.getElementById("hide2").style.display = "none"
    } else {
        m.type = "password";
        document.getElementById("show2").style.display = "none"
        document.getElementById("hide2").style.display = "inline-block"
    }
}

const email = document.getElementById("email");
const pass1 = document.getElementById("password");
const pass2 = document.getElementById("password");

email.addEventListener("input",() => {
    const emailBox = document.querySelector("#emailBox");
    const emailText = document.querySelector("#emailText");
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if (email.value.match(emailPattern)) {
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.innerHTML = "";
    } else { 
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Must be a valid email address.";
    }
});

password.addEventListener("input",() => {
    const passBox = document.querySelector("#passBox");
    const passText = document.querySelector("#passText");
    const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (password.value.match(passPattern)) {
        passBox.classList.add("valid");
        passBox.classList.remove("invalid");
        passText.innerHTML = "";
    } else {
        passBox.classList.add("invalid");
        passBox.classList.remove("valid");
        passText.innerHTML = "Your password must be atleast 6 characters as well as to contain atleast one uppercas, one lowercase, and one number.";
    }
});

function myCheck() {
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if (password == password2) {
        document.getElementById("wrong").innerHTML = "";
        return true
    } else {
        document.getElementById("wrong").innerHTML = "Password don't match";
        return false
    }
}