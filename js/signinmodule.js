import { AddUser } from "./signupmodule.js";
import { nameinput, emailInput, passwordInput, Login, SignUpp, Psignin, Psignout, alertsec, HomeContant, demo, prag, alert3, linkIn, linkUp , logOutBtn , alert1 } from "./varibleModule.js";


class Logined {
    DataArray = [];
    signed() {
        if (JSON.parse(localStorage.getItem('alluser')) !== null) {
            this.DataArray = JSON.parse(localStorage.getItem('alluser'));
            for (let i = 0; i < this.DataArray.length; i++) {
                if (emailInput.value === this.DataArray[i].emailInput && passwordInput.value === this.DataArray[i].passwordInput) {
                    prag.innerHTML = this.DataArray[i].nameinput;
                    HomeContant.classList.remove('d-none');
                    demo.classList.add('d-none');
                }
            }
        }
    }
}

export class SignInn {
    In() {
        let loggin = new Logined();
        Login.addEventListener('click', function (e) {
            e.preventDefault();
            loggin.signed();
        })
    }
}

export class ALLSignUp {
    allUP() {
        linkUp.addEventListener('click', function (e) {
            e.preventDefault();
            nameinput.classList.remove('d-none');
            SignUpp.classList.remove('d-none');
            Psignin.classList.remove('d-none');
            Login.classList.add('d-none');
            Psignout.classList.add('d-none');
           
        })
    }
}

export class Log{
    Logout() {
        let cleaar = new AddUser();
        logOutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            HomeContant.classList.add('d-none');
            demo.classList.remove('d-none');
            cleaar.clear();
            emailInput.classList.remove('is-valid');
            passwordInput.classList.remove('is-valid');
        })
    }
}