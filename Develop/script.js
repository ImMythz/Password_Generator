const symbols = '!@#$%^&*()=<>,./[]{}';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  // userPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// User prompts
function passwordLength() {
  const passwordPrompt = prompt('How many characters would you like you password to be? (8-128)');
  if (passwordPrompt < 8) {
    alert("Password length must be between 8 and 128 characters");
    console.log(passwordPrompt);
    return;
  }
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

// function userPrompts() {
//   const lowercasePrompt = confirm("Would you like to include lowercase letters?");
//   const uppercasePrompt = confirm("Would you like to include uppercase letters?");
//   const numberPrompt = confirm("Would you like to include numbers?");
//   const symbolPrompt = confirm("Would you like to include symbols or special characters?");
//   return lowercasePrompt, uppercasePrompt, numberPrompt, symbolPrompt;
// }


// Generates the password
// function generatePassword(lowercasePrompt, uppercasePrompt, numberPrompt, symbolPrompt, lower, upper, number, symbol, passwordPrompt) {
//   let generatedPassword = '';
//   if (lowercasePrompt == true) {
//     generatedPassword += lower.randomLowercase()
//   }
//   if (uppercasePrompt == true) {
//     generatedPassword += upper.randomUppercase()
//   }
//   if (numberPrompt == true) {
//     generatedPassword += number.randomNumber()
//   }
//   if (symbolPrompt == true) {
//     generatedPassword += symbol.randomSymbol()
//   }

//   for (let i = generatedPassword.length; i < parseInt(passwordPrompt); i++) {}
// }



function generatePassword(passwordPrompt, lower, upper, number, symbol) {
  let generatedPassword = '';
  const lowercasePrompt = confirm("Would you like to include lowercase letters?");
  const uppercasePrompt = confirm("Would you like to include uppercase letters?");
  const numberPrompt = confirm("Would you like to include numbers?");
  const symbolPrompt = confirm("Would you like to include symbols or special characters?");
  console.log(lowercasePrompt);
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

  for (let i = generatedPassword.length; i < parseInt(passwordPrompt); i++) {}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);