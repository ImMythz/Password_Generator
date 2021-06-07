const symbols = '!@#$%^&*()=<>,./[]{}';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// User prompts
function passwordLength() {
  const passwordPrompt = prompt('How many characters would you like you password to be? (8-128)');
  if (passwordPrompt < 8) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }
}
const passwordPrompt = prompt('How many characters would you like you password to be? (8-128)')
const lowercasePrompt = confirm("Would you like to include lowercase letters?");
const uppercasePrompt = confirm("Would you like to include lowercase letters?");
const numberPrompt = confirm("Would you like to include lowercase letters?");
const symbolPrompt = confirm("Would you like to include lowercase letters?");


// Lowercase function
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Uppercase function
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Numeric function
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// and/or special characters function
function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);