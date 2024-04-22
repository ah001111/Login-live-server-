import { nameinput, emailInput, passwordInput, Login, SignUpp, Psignin, Psignout, alertsec, linkIn , alert1 } from "./varibleModule.js";
import { validationInput } from "./validationmodule.js";


class User {
    constructor(nameinput, emailInput, passwordInput) {

        this.nameinput = nameinput;
        this.emailInput = emailInput;
        this.passwordInput = passwordInput;
    }
}

export class AddUser {
    DataArray = [];

    Sign() {
        let valid = new validationInput();

        let user1 = new User(nameinput.value, emailInput.value, passwordInput.value);

        if (valid.valiadteName() && valid.valiadteEmail() && valid.valiadtePassword()) {

            this.DataArray.push(user1);
            console.log(this.DataArray);
            let DataString = JSON.stringify(this.DataArray);
            localStorage.setItem('alluser', DataString);


            nameinput.classList.add('d-none');
            Login.classList.remove('d-none');
            SignUpp.classList.add('d-none');
            Psignin.classList.add('d-none');
            Psignout.classList.remove('d-none');
            this.clear();
            emailInput.classList.remove('is-valid');
            passwordInput.classList.remove('is-valid');
        }
    }

    clear() {
        emailInput.value = '';
        passwordInput.value = '';
    }

    allSIN() {
        linkIn.addEventListener('click', function (e) {
            e.preventDefault();
            nameinput.classList.add('d-none');
            Login.classList.remove('d-none');
            SignUpp.classList.add('d-none');
            Psignin.classList.add('d-none');
            Psignout.classList.remove('d-none');
            alert1.classList.add('d-none');
        })
    }
}


export class SignnUUP {
    Up() {
        let user2 = new AddUser();
        SignUpp.addEventListener('click', function (e) {
            e.preventDefault();
            user2.Sign();
        })
    }
}















