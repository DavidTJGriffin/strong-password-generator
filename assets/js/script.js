// Assignment code here
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var upperCaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'X', 'C', 'V', 'B', 'N', 'M']

var lowerCaseLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

// Password criteria
var passwordPrompt = function () {
  var lengthPrompt;
  function pickNumber() {
    var lengthPrompt = parseInt(prompt('Enter an integer for password length with at least 8 characters and no more than 128 characters'));

    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      alert('You choose a length of ' + lengthPrompt + ' characters.');
    } else {
      alert('You need to choose a length of characters from 8 to 128!')
      pickNumber();  // runs the function again from the beginning
    }
  };
  // console.log(lengthPrompt + 'lowercase: ' + lowercasePrompt + 'uppercase: ' + uppercasePrompt + 'numbers: ' + numbersPrompt + 'special chars: ' + specialPrompt)
  pickNumber();

  function chooseCriteria(lengthPrompt) {
    // lowercase 
    var lowercasePrompt = confirm('Do you want lowercase letters in your password?');
    // uppercase characters
    var uppercasePrompt = confirm('Do you want uppercase letters in your password?');
    // numeric characters
    var numbersPrompt = confirm('Do you want numbers in your password?');
    // special characters
    var specialPrompt = confirm('Do you want special characters in your password?');
    // if the user did not enter enough criteria for their password
    if (
      lowercasePrompt === false &&
      uppercasePrompt === false &&
      numbersPrompt === false &&
      specialPrompt === false) {
      alert('You did not choose enough options, please choose at least one option!')
      chooseCriteria();
    };

    var passwordChoices = {
      lowercase: lowercasePrompt,
      uppercase: uppercasePrompt,
      numbers: numbersPrompt,
      special: specialPrompt,
      length: lengthPrompt
    };

    // various password array combinations 
    const pool = []
    if (lowercasePrompt) {
      pool.push(...random(lowerCaseLetters))
    }
    if (uppercasePrompt) {
      pool.push(...random(upperCaseLetters))
    }
    if (specialPrompt) {
      pool.push(...random(specialCharacters))
    }
    if (numbersPrompt) {
      pool.push(...random(numbers))
    }
  };
  chooseCriteria(lengthPrompt);
}






function generatePassword() { }
// Get references to the #generate element
var generateBtn = document.querySelector('#generate')
generateBtn.addEventListener('click', passwordPrompt)

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
