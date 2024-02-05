const loginForm = document.getElementById("login-form");
let userDetailsArray = [];

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let mobile = document.getElementById("mobile");
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    let userDeatils = {
        name: name.value,
        mobile: mobile.value,
        email: userName.value,
        password: password.value,
    }
    let storedData = JSON.parse(localStorage.getItem('userDetails')) || [];
    console.log(storedData);
    storedData.push(userDeatils);
    localStorage.setItem('userDetails',JSON.stringify(storedData));
    window.location.href = '../index.html';

})