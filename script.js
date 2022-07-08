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
  // var includeUpper = getIncludeUpper();
  // console.log(includeUpper);
}




// get password length
function getPassLength(min, max) {

  var lengthInput = prompt("Please choose a password length between 8 and 128 characters:");

  if (lengthInput.match(/[0-9]/) && lengthInput >= min && lengthInput <= max) {
    return lengthInput;
  } else {
    alert("Your input was invalid");
    getPassLength(minLength, maxLength);
  }
}

// function getIncludeUpper() {

//   var isUpper = prompt("Would you like to include uppercase  characters? Yes or No")

//   if (isUpper.toLowerCase() === "yes" || isUpper.toLowerCase() === "y") {
//     return true;
//   } else if (isUpper.toLowerCase() === "no" || isUpper.toLowerCase() === "n") {
//     return false;
//   } else {
//     alert("Your input was invalid");
//   } getIncludeUpper();
// }