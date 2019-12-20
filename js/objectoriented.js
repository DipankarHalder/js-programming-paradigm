// using OBJECT ORIENTED PARADIGM

class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';
    static validate(value, flag, validatorValue){
        if(flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        if(flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}
class User {
    constructor(uName, uPassword) {
        this.username = uName;
        this.password = uPassword;
    }
    greet(){
        console.log(`Hi Admin, I'm ${this.username}`);
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.usernameinput = document.getElementById('username');
        this.passwordinput = document.getElementById('password');
        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }
    signupHandler(event){
        event.preventDefault(); 
        const enteredUsername = this.usernameinput.value;
        const enteredPassword = this.passwordinput.value;
        if(
            !Validator.validate(enteredUsername, Validator.REQUIRED) || 
            !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
        ){
            alert('Empty username or Empty / Lessthan 6 character password');
            return;
        }
        const newUser = new User(enteredUsername, enteredPassword);
        console.table(newUser);
        newUser.greet();
    }
}

new UserInputForm();







