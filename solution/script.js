// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength = prompt("Please choose a password length between 8 and 128 characters:")

if (passLength.match(/[0-9]/)) {
  if (passLength >= 8 && passLength <= 128) { alert("yay") } else { alert("boo") }
} else (alert("Please enter only digits between 8 and 128."))

