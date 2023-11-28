// TODO
const nameEl = document.getElementById("name");
const email = document.getElementById("email");

const form = document.getElementById("contact-me");

const select = document.getElementById("contact-reason");
const job = document.getElementById("job-title");
const companyWebsite = document.getElementById("company-website");
const codingLanguage = document.getElementById("coding-language");

const message = document.getElementById("message");

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

const validateUrl = (url) => {
    const re = /https?\:\/\/.+\..+/;
    if(re.test(url.value.trim())){
        url.parentElement.classList.remove("invalid");
        return true;
    } else {
        url.parentElement.classList.add("invalid");
        return false;
    }
}

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue === "job"){
        job.parentElement.classList.remove("hidden");
        companyWebsite.parentElement.classList.remove("hidden");
        codingLanguage.parentElement.classList.add("hidden");
    } else if (selectedValue === "talk"){
        codingLanguage.parentElement.classList.remove("hidden");
        job.parentElement.classList.add("hidden");
        companyWebsite.parentElement.classList.add("hidden");
    }
};

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let msg = '';
    let valid = true;

    if (!validLength(nameEl, 3)){
        msg += '\nName must be included and > 3 characters.';
        valid = false;
    }
    if (!validateEmail(email)){
        msg += '\nEmail is not valid.';
        valid = false;
    }
    if (!validLength(message, 10)){
        msg += '\nMessage must be included and > 10 characters.';
        valid = false;
    }
    if (select.value === 'job'){
        if (!validLength(job, 0)){
            msg += '\nEnter a Job title.';
            valid = false;
        }
        if(!validateUrl(companyWebsite)){
            msg += '\nCompany website must be a valid URL.';
            valid = false;
        }
    } else if (select.value === 'talk'){
        codingLanguage.parentElement.classList.remove("invalid");
        if (codingLanguage.value === 'choose'){
            codingLanguage.parentElement.classList.add("invalid");
            msg += '\nPlease select a coding language.';
            valid = false;
        }
    }

    if (!valid){
        e.preventDefault();
        alert(msg);
    }
});
