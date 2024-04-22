import { nameinput, emailInput, passwordInput, alert1, alert2, alert3 } from "./varibleModule.js";


export class validationInput {

    valiadteName() {
        let NameRgex = /^[A-Z][a-z]{3,9}$/
        let NameValue = nameinput.value;
        if (NameRgex.test(NameValue)) {
            nameinput.classList.add('is-valid');
            nameinput.classList.remove('is-invalid');
            alert1.classList.add('d-none');
            return true;
        }
        else {
            nameinput.classList.remove('is-valid');
            nameinput.classList.add('is-invalid');
            alert1.classList.remove('d-none');
            return false;
        }
    }

    valiadteEmail() {
        let EmailRgex = /^[a-zA-Z0-9]*(@)[a-z]*(.com)$/
        let EmailValue = emailInput.value;
        if (EmailRgex.test(EmailValue)) {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
            alert2.classList.add('d-none');
            return true;
        }
        else {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
            alert2.classList.remove('d-none');
            return false;
        }
    }

    valiadtePassword() {
        let PasswordRgex = /^[A-Za-z0-9]{6,}$/
        let PasswordValue = passwordInput.value;
        if (PasswordRgex.test(PasswordValue)) {
            passwordInput.classList.add('is-valid');
            passwordInput.classList.remove('is-invalid');
            alert3.classList.add('d-none');
            return true;
        }
        else {
            passwordInput.classList.remove('is-valid');
            passwordInput.classList.add('is-invalid');
            alert3.classList.remove('d-none');
            return false;
        }
    }

    validName() {
        nameinput.addEventListener('input' , this.valiadteName);
    }
    validEmail() {
        emailInput.addEventListener('input', this.valiadteEmail)
    }

    validPassword() {
        passwordInput.addEventListener('input', this.valiadtePassword)
    }

}





























