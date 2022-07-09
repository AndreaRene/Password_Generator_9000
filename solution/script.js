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

// generate password function will parent everything

function generatePassword() {
  var passLength = getPassLength(minLength, maxLength);
  console.log(passLength);
  var includeUpper = getResponse("uppercase letters?");
  console.log(includeUpper);
  var includeLower = getResponse("lowercase letters?");
  console.log(includeLower);
  var includeSpecial = getResponse("special characters?");
  console.log(includeSpecial);
  var includeNumber = getResponse("numbers?");
  console.log(includeNumber);
}




// get password length
function getPassLength(min, max) {
  let i = 0;
  while (i === 0) {
    var lengthInput = prompt("Please choose a password length between 8 and 128 characters:");
    if (lengthInput.match(/[0-9]/) && !lengthInput.match(/[.]/) && lengthInput >= min && lengthInput <= max) {
      console.log(lengthInput);
      i++;
      return lengthInput.trim();
    } else {
      alert("Your input was invalid");
    }
  }
}

// get password requirements (upper, lower, special, number)
function getResponse(condition) {
  let i = 0;
  while (i === 0) {
    var response = prompt("Would you like to include " + condition + " Yes or No");
    if (response.toLowerCase() === "yes" || response.toLowerCase() === "y") {
      console.log(response);
      i++;
      return true;
    } else if (response.toLowerCase() === "no" || response.toLowerCase() === "n") {
      console.log(response);
      i++;
      return false;
    } else {
      alert("Your input was invalid");
    }
  }
}

// create character list for password generator based on user requirements
function getCharList(includeUpper, includeLower, includeSpecial, includeNumber) {

}