// Assignment Code
var generateBtn = document.querySelector("#generate");
var minLength = 8;
var maxLength = 128;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password 
function generatePassword() {

  var passLength = getPassLength(minLength, maxLength);

  let i = 0;
  while (i === 0) {
    var includeUpper = getResponse("uppercase letters?");
    var includeLower = getResponse("lowercase letters?");
    var includeSpecial = getResponse("special characters?");
    var includeNumber = getResponse("numbers?");

    if (includeUpper || includeLower || includeSpecial || includeNumber) {
      i++;
    } else {
      alert("You must select at least one character type.")
    }
  }

  var charList = getCharList(includeUpper, includeLower, includeSpecial, includeNumber);
  var randomPass = "";

  for (let j = 0; j < passLength; j++) {
    randomPass += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return randomPass;
}

// get password length
function getPassLength(min, max) {

  let i = 0;
  while (i === 0) {
    var lengthInput = prompt("Please choose a password length between 8 and 128 characters:");

    if (!lengthInput.match(/[.]/) && lengthInput >= min && lengthInput <= max) {
      i++;
      return lengthInput.trim();
    } else {
      alert("Your input was invalid.");
    }
  }
}

// get password requirements (upper, lower, special, number)
function getResponse(condition) {

  let i = 0;
  while (i === 0) {
    var response = prompt("Would you like to include " + condition + " Yes or No");
    if (response.toLowerCase() === "yes" || response.toLowerCase() === "y") {
      i++;
      return true;
    } else if (response.toLowerCase() === "no" || response.toLowerCase() === "n") {
      i++;
      return false;
    } else {
      alert("Your input was invalid.");
    }
  }
}

// create character list for password generator based on user requirements
function getCharList(includeUpper, includeLower, includeSpecial, includeNumber) {

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = upper.toLowerCase();
  var number = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
  var charSet = "";

  if (includeUpper) {
    charSet += upper;
  }
  if (includeLower) {
    charSet += lower;
  }
  if (includeNumber) {
    charSet += number;
  }
  if (includeSpecial) {
    charSet += special;
  }
  return charSet;
}