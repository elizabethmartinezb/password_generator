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
    let errors = [];

    if (generatedPassword.length < numberMinimumOfCharacters) {
        errors.push('La contraseña requiere mínimo 8 caracteres.');
    } 

    if (!generatedPassword.match(/[A-Z]/)) {
        errors.push('La contraseña requiere por lo menos una letra mayúscula.');
    }

    if (!generatedPassword.match(/[a-z]/)) {
        errors.push('La contraseña requiere por lo menos una letra minúscula.');
    }

    if (!generatedPassword.match(/\d/)) {
        errors.push('La contraseña requiere por lo menos un número.');
    }

    if (!generatedPassword.match(/[^a-zA-Z\d]/)) {
        errors.push('La contraseña requiere por lo menos un carácter especial.');
    }

    if (errors.length > 0) {
        message = errors.join(' ');
    } else {
        message = securePassword;
    }

    document.getElementById('validatedPassword').innerHTML = message;
} 