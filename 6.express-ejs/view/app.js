let regForm = document.getElementById("regForm")

let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let passEl = document.getElementById("pass")

regForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        name: nameEl.value,
        email: emailEl.value,
        password: passEl.value
    };

    console.log(`user =`, user)
});