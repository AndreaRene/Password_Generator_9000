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
  var includeUpper = getIncludeUpper();
  console.log(includeUpper);
}




// get password length
function getPassLength(min, max) {
  let i = 0;
  while (i === 0) {
    var lengthInput = prompt("Please choose a password length between 8 and 128 characters:");
    if (lengthInput.match(/[0-9]/) && lengthInput >= min && lengthInput <= max) {
      console.log(lengthInput);
      i++;
      return lengthInput.valueOf();
    } else {
      alert("Your input was invalid");
    }
  }
}

// does the user want upper case

function getIncludeUpper() {
  let i = 0;
  while (i === 0) {
    var isUpper = prompt("Would you like to include uppercase  characters? Yes or No");
    if (isUpper.toLowerCase() === "yes" || isUpper.toLowerCase() === "y") {
      console.log(isUpper);
      i++;
      return true;
    } else if (isUpper.toLowerCase() === "no" || isUpper.toLowerCase() === "n") {
      console.log(isUpper);
      i++;
      return false;
    } else {
      alert("Your input was invalid");
    }
  }
}