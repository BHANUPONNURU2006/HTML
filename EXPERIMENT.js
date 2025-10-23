document.getElementById('regform').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message');

    let msg = "";

    if(name === "" || email === "" || password === "" || phone === "") {
        msg = "All fields are required";
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg = "Invalid Email Format";
    }
    else if(password.length < 6) {
        msg = "Password must be at least 6 characters";
    }
    else if(!/^\d{10}$/.test(phone)) {
        msg = "Phone must be 10 digits";
    }
    else {
        msg = "Registration Successful!";
    }

    message.innerText = msg;
    message.className = (msg === "Registration Successful!") ? "success" : "error";
});
