// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");

const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");

let valid = false;

const validLength = (input, min) => {
    if(input.value.trim().length > min){
        input.parentElement.classList.remove("invalid");
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        return false;
    }
};

const validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(email.value.trim())){
        email.parentElement.classList.remove("invalid");
        return true;
    } else {
        email.parentElement.classList.add("invalid");
        return false;
    }
};

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue === "business"){
        employees.parentElement.classList.remove("hidden");
        os.parentElement.classList.add("hidden");
    } else if (selectedValue === "technical"){
        os.parentElement.classList.remove("hidden");
        employees.parentElement.classList.add("hidden");
    }
};

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    if (validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)){
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
    }
});

