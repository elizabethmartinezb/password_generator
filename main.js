let numberOfCharacters = document.getElementById("quantity");
let button = document.getElementById("generate");

let password = document.getElementById('password');
const numberMinimumOfCharacters = 8;
const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generatePassword() {
    let typedNumber = parseInt(numberOfCharacters.value);

    if (typedNumber < numberMinimumOfCharacters) {
        alert("La cantidad mínima de caracteres es " + numberMinimumOfCharacters);
    }

    let generatedPassword = '';
    for (let index = 0; index < typedNumber; index++) {
        
        let randomCharacter = characterString[Math.floor(Math.random() * characterString.length)];
        console.log(randomCharacter);
        
        generatedPassword += randomCharacter;
    }

    password.value = generatedPassword;
    
}
