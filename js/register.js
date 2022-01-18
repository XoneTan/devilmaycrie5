const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const pass1 = document.getElementById("password");
const address = document.getElementById("address");
const accept = document.getElementById("accept");
const radio1 = document.getElementById("male");
const radio2 = document.getElementById("female");
const dummy = document.getElementById("dummy");

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


const validateForm = () => {
    const userValue = username.value.trim();
    const emailVal = email.value.trim();
    const pass1Val = pass1.value.trim();
    const addr = address.value.trim();

    if(userValue === ""){
        errMessage(username, "Username is required");
    }else{
        successMessage(username);
    }
    if(emailVal === '') {
        errMessage(email, 'Email is required');
    }else {
        successMessage(email);
    }
    if(pass1Val === '') {
        errMessage(pass1, 'Password is required');
    } else if (pass1Val.length < 8 ) {
        errMessage(pass1, 'Password must be at least 8 character.')
    } else {
        successMessage(pass1);
    }

    if(radio1.checked || radio2.checked){
        successMessage(dummy);
    }else{
        errMessage(dummy, 'Please select gender!');
    }

    if(addr === '') {
        errMessage(address, 'Address is required');
    }else {
        successMessage(address);
    }

    if(!accept.checked){
        errMessage(accept, 'Please check the terms and condition!');
    }else {
        successMessage(accept);
    }

}

