// Assignment code here
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var capitalLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'X', 'C', 'V', 'B', 'N', 'M']

var lowerCaseLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']


var passwordPrompt = function () {
  // change the length of password between 8 characters and 128 characters
  var lengthPrompt = parseInt(prompt('Enter an integer for password length with at least 8 characters and no more than 128 characters'));
  if (lengthPrompt >= 8) {
    alert('You choose a length of ' + lengthPrompt + ' characters.');
    return null;
  }

  if (lengthPrompt <= 128) {
    alert('You choose a length of ' + lengthPrompt + ' characters.');
    return null;
  }

  // lowercase 
  var lowercasePrompt = confirm('Do you want lowercase letters in your password?');
  // uppercase characters
  var uppercasePrompt = confirm('Do you want uppercase letters in your password?');
  // numeric characters
  var numericPrompt = confirm('Do you want numbers in your password?');
  // special characters
  var specialPrompt = confirm('Do you want special characters in your password?');

  // check what the user's conditions
  if (
    lowercasePrompt === false &&
    uppercasePrompt === false &&
    numericPrompt === false &&
    specialPrompt === false) {
    alert('You did not choose enough criteria, please try again and choose at least one');
    return null;
  }
var passwordChoices = {
  lengthPrompt: lengthPrompt, 
  lowercasePrompt: lowercasePrompt,
  uppercasePrompt: uppercasePrompt,
  numericPrompt: numericPrompt,
  specialPrompt: specialPrompt
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
