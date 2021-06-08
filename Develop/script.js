const symbols = '!@#$%^&*()=<>,./[]{}';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // passwordLength();
  // userPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let generatedPassword = '';
  const passwordPrompt = prompt('How many characters would you like you password to be? (8-128)');
  if (passwordPrompt < 8) {
    alert("Password length must be between 8 and 128 characters");
    console.log(passwordPrompt);
    return;
  }
  const lowercasePrompt = confirm("Would you like to include lowercase letters?");
  const uppercasePrompt = confirm("Would you like to include uppercase letters?");
  const numberPrompt = confirm("Would you like to include numbers?");
  const symbolPrompt = confirm("Would you like to include symbols or special characters?");

  // Object with randomizer functions inside
  const randomPrompts = {
    // Lowercase function
    lower: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },

    // Uppercase function
    upper: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },

    // Numeric function
    number: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },

    // and/or special characters function
    symbol: function () {
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
  }

  if (lowercasePrompt == true) {
    generatedPassword += randomPrompts.lower()
  }
  if (uppercasePrompt == true) {
    generatedPassword += randomPrompts.upper()
  }
  if (numberPrompt == true) {
    generatedPassword += randomPrompts.number()
  }
  if (symbolPrompt == true) {
    generatedPassword += randomPrompts.symbol()
  }
  console.log(generatedPassword);
  console.log(passwordPrompt);
  for (let i = generatedPassword.length; i < passwordPrompt; i++) {

  }
  console.log(generatedPassword);
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);