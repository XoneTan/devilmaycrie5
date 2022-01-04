const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const pass1 = document.getElementById("password");
const pass2 = document.getElementById("passConf");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateForm();
});

const errMessage = (attr, msg) => {
    const pointer = attr.parentElement;
    const err = pointer.querySelector(".error");
    
    err.innerText = msg;
    pointer.classList.add('error');
    pointer.classList.remove('success');

}

const successMessage = attr => {
    const point = attr.parentElement;
    const err = point.querySelector(".error");

    err.innerText = "";
    point.classList.add("success");
    point.classList.remove("error");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateForm = () => {
    const userValue = username.value.trim();
    const emailVal = email.value.trim();
    const pass1Val = pass1.value.trim();
    const pass2Val = pass2.value.trim();

    if(userValue === ""){
        errMessage(username, "Username is required");
    }else{
        successMessage(username);
    }
    if(emailVal === '') {
        errMessage(email, 'Email is required');
    } else if (!isValidEmail(emailVal)) {
        errMessage(email, 'Provide a valid email address');
    } else {
        successMessage(email);
    }
    if(pass1Val === '') {
        errMessage(pass1, 'Password is required');
    } else if (pass1Val.length < 8 ) {
        errMessage(pass1, 'Password must be at least 8 character.')
    } else {
        successMessage(pass1);
    }

    if(pass2Val === '') {
        errMessage(pass2, 'Please confirm your password');
    } else if (pass2Val !== pass1Val) {
        errMessage(pass2, "Passwords doesn't match");
    } else {
        successMessage(pass2);
    }

}

