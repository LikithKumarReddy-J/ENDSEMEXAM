
document.getElementById("signupForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let msg = document.getElementById("msg");

    if (name == "" || email == "" || password == "") {
        msg.style.color = "red";
        msg.innerHTML = "Please fill all fields!";
    }
    else {
        msg.style.color = "green";
        msg.innerHTML = "Signup Successful!";
    }

});
