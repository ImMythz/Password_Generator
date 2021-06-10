const symbols = '!@#$%^&*()=<>,./[]{}';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  finalAlert()
  passwordText.value = password;
}

// Password generating function
function generatePassword() {
  let generatedPassword = '';
  const passwordPrompt = prompt('How many characters would you like you password to be? (8-128)');
  if (passwordPrompt < 8) {
    alert("Password length must be between 8 and 128 characters");
    console.log(passwordPrompt);
    return;
  }

  // User prompts
  const lowercasePrompt = confirm("Would you like to include lowercase letters?");
  const uppercasePrompt = confirm("Would you like to include uppercase letters?");
  const numberPrompt = confirm("Would you like to include numbers?");
  const symbolPrompt = confirm("Would you like to include symbols or special characters?");

  // Lowercase function
  function lowercaseFunc() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  // Uppercase function
  function uppercaseFunc() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  // Numeric function
  function numberFunc() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  // and/or special characters function
  function symbolFunc() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // Object with randomizer functions inside
  const randomPrompts = {
    lower: lowercaseFunc,
    upper: uppercaseFunc,
    number: numberFunc,
    symbol: symbolFunc,
  }

  // Empty array for selected criteria to be added to 
  const typesCriteria = [];

  // Checks to see if you selected the particular criteria
  if (lowercasePrompt == true) {
    generatedPassword += randomPrompts.lower();
    typesCriteria.push(randomPrompts.lower);
  }
  if (uppercasePrompt == true) {
    generatedPassword += randomPrompts.upper();
    typesCriteria.push(randomPrompts.upper);
  }
  if (numberPrompt == true) {
    generatedPassword += randomPrompts.number();
    typesCriteria.push(randomPrompts.number);
  }
  if (symbolPrompt == true) {
    generatedPassword += randomPrompts.symbol();
    typesCriteria.push(randomPrompts.symbol);
  }

  // Loops over criteria to generate password
  for (let i = generatedPassword.length; i < passwordPrompt; i++) {
    const randomChar = Object.values(typesCriteria)[0]();
    generatedPassword += randomChar;
  }
  // Returns password
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Finished password alert
function finalAlert() {
  window.alert("Your pasword has been created");
}