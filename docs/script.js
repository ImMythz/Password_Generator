// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const clipboard = document.getElementById('clipboard');

// Object holding functions for later
const randomFunc = {
	lower: randomLowercase,
	upper: randomUppercase,
	number: randomNumeric,
	symbol: randomSpecialChar,
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click'", writePassword,);

// Check boxes for each password criteria
generate.addEventListener('click', () => {
	const length = lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


// Lowercase function
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(randomLowercase());

// Uppercase function
function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(randomUppercase());

// Numeric function
function randomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(randomNumeric());

// and/or special characters function
function randomSpecialChar() {
  const symbols = '!@#$%^&*()=<>,./[]{}';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomSpecialChar());


// WHEN I clicked #generate the password shows on screen and an alert pops up
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	if(typesCount === 0) {
		return '';
  }
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
  const finalPassword = generatedPassword.slice(0, length);
  window.alert("Your pasword has been created");
	
  return finalPassword;
}

// give option to copy password to clipboard
clipboard.addEventListener('click', () => {
	passwordEl.select();
  document.execCommand('copy');
	alert('Password copied to clipboard');
});




// WHEN password is written an ALERT box pops up indicating the password was made
// window.alert("Your pasword has been created");
