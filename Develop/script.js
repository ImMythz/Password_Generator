const symbols = '!@#$%^&*()=<>,./[]{}';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  userPrompts();
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

function userPrompts() {
  const lowercasePrompt = confirm("Would you like to include lowercase letters?");
  const uppercasePrompt = confirm("Would you like to include uppercase letters?");
  const numberPrompt = confirm("Would you like to include numbers?");
  const symbolPrompt = confirm("Would you like to include symbols or special characters?");
  return lowercasePrompt, uppercasePrompt, numberPrompt, symbolPrompt;
}

// Object with randomizer functions inside
const randomPrompts = {
  // Lowercase function
  lower: function randomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },

  // Uppercase function
  upper: function randomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

  // Numeric function
  number: function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

  // and/or special characters function
  symbol: function randomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  },
}

// Generates the password
function generatePassword(lower, upper, number, symbol, passwordPrompt) {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);