const userPrj = document.querySelector('#username');
const emailPrj = document.querySelector('#email');
const passwordPrj = document.querySelector('#password');
const confirmpasswordPrj = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 5,
        max = 25;

    const username = userPrj.value.trim();

    if (!isRequired(username)) {
        showError(userPrj, 'Username is required');
    } else if (!isBetween(username.length, min, max)) {
        showError(userPrj, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(userPrj);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailPrj.value.trim();
    if (!isRequired(email)) {
        showError(emailPrj, 'Email is required');
    } else if (!isEmailValid(email)) {
        showError(emailPrj, 'Email is not valid.')
    } else {
        showSuccess(emailPrj);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordPrj.value.trim();

    if (!isRequired(password)) {
        showError(passwordPrj, 'Password is required');
    } else if (!isPasswordSecure(password)) {
        showError(passwordPrj, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordPrj);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmpasswordPrj.value.trim();
    const password = passwordPrj.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmpasswordPrj, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmpasswordPrj, 'The password does not match');
    } else {
        showSuccess(confirmpasswordPrj);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});