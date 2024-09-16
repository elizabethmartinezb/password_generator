let numberOfCharacters = document.getElementById("quantity");
let button = document.getElementById("generate");
let password = document.getElementById('password');
let message = '';

const numberMinimumOfCharacters = 8;
const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡!@#$%^&*()/=¿?-+';

function generatePassword() {
    let typedNumber = parseInt(numberOfCharacters.value);

    if (!numberOfCharacters.value) {
        alert("El campo cantidad no puede quedar vacío");
    } else {
        if (typedNumber < numberMinimumOfCharacters) {
            alert("La cantidad mínima de caracteres es " + numberMinimumOfCharacters);
            cleanFields();
        } else {
            let generatedPassword = '';
            for (let index = 0; index < typedNumber; index++) {
                
                let randomCharacter = characterString[Math.floor(Math.random() * characterString.length)];
                console.log(randomCharacter);
                
                generatedPassword += randomCharacter;
            }
    
            password.value = generatedPassword;
            validatePassword(generatedPassword);
        }
    }
}

function cleanFields () {
    numberOfCharacters.value = '';
    password.value = '';
    message = '';
    document.getElementById('validatedPassword').innerHTML = message;
}

function validatePassword (generatedPassword) {

    let securePassword = 'La contraseña generada es <b>segura</b>.';
    let insecurePassword = '';
    
    if (generatedPassword.length < numberMinimumOfCharacters) {
        insecurePassword = 'La contraseña requiere mínimo 8 caracteres. '
    } else {
        counter = 1;
        console.log(counter);
    }

    if (generatedPassword.match(/[A-Z]/)) {
        counter += 1;
        console.log(counter);
    } else {
        insecurePassword += 'La contraseña requiere por lo menos una letra mayúscula. ';
    }

    if (generatedPassword.match(/[a-z]/)) {
        counter += 1;
        console.log(counter);
    } else {
        insecurePassword += 'La contraseña requiere por lo menos una letra minúscula. ';
    }

    if (generatedPassword.match(/\d/)) {
        counter += 1;
        console.log(counter);
    } else {
        insecurePassword += 'La contraseña requiere por lo menos un número. ';
    }

    if (generatedPassword.match(/[^a-zA-Z\d]/)) {
        counter += 1;
        console.log(counter);
    } else {
        insecurePassword += 'La contraseña requiere por lo menos un carácter especial. ';
    }

    if (counter == 5) {
        message = securePassword;
    } else {
        message = insecurePassword;
    }
    document.getElementById('validatedPassword').innerHTML = message;
} 