// using PROCEDURAL PARADIGM

const form = document.getElementById('user-input');

function signupHandler(event){
    event.preventDefault();

    const usernameinput = document.getElementById('username');
    const enteredUsername = usernameinput.value;

    const passwordinput = document.getElementById('password');
    const enteredPassword = passwordinput.value;

    if(enteredUsername.trim().length === 0){
        alert("Invalid or empty username");
        return;
    }

    if(enteredPassword.trim().length <= 5){
        alert("Invalid or empty password or password must be 6 character");
        return;
    }

    const newUser = {
        userName: enteredUsername,
        password: enteredPassword
    };

    console.table(newUser);
    console.log(`Hi Admin, I'm ${newUser.userName}`);
}

form.addEventListener('submit', signupHandler);








