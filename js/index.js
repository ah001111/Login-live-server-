import { SignInn , ALLSignUp , Log} from "./signinmodule.js";
import { AddUser, SignnUUP} from "./signupmodule.js";
import { validationInput } from "./validationmodule.js";


let addd = new SignnUUP();
addd.Up();

let loogin = new SignInn();
loogin.In();


let Validd = new validationInput();
Validd.validName();
Validd.validEmail();
Validd.validPassword();


let Sign_in = new AddUser();
Sign_in.allSIN();

let Sign_up = new ALLSignUp();
Sign_up.allUP();


let out = new Log();
out.Logout();