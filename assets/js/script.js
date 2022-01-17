// Assignment code here
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var upperCaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'X', 'C', 'V', 'B', 'N', 'M']

var lowerCaseLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

// Password criteria

function passwordPrompt() {
  var lengthPrompt;
  function pickNumber() {
    var lengthPrompt = parseInt(prompt('Enter an integer for password length with at least 8 characters and no more than 128 characters'));

    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      alert('You choose a length of ' + lengthPrompt + ' characters.');
    } else {
      alert('You need to choose a length of characters from 8 to 128!')
      pickNumber();  // runs the function again from the beginning
    }
    function chooseCriteria() {
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
      console.log(passwordChoices.length)
      // various password array combinations 
      var array;
      var array = []
      if (lowercasePrompt) {
        array.push(...(lowerCaseLetters))
      }
      if (uppercasePrompt) {
        array.push(...(upperCaseLetters))
      }
      if (specialPrompt) {
        array.push(...(specialCharacters))
      }
      if (numbersPrompt) {
        array.push(...(numbers))
      }


      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
      // Used like so
      
      shuffle(array);
      array.length = lengthPrompt 

      console.log(array);

  
      
      
    };
    chooseCriteria();
  
  };
  // console.log(lengthPrompt + 'lowercase: ' + lowercasePrompt + 'uppercase: ' + uppercasePrompt + 'numbers: ' + numbersPrompt + 'special chars: ' + specialPrompt)
  pickNumber();
}






// Get references to the #generate element
var generateBtn = document.querySelector('#generate')
generateBtn.addEventListener('click', passwordPrompt)



function generatePassword() {}
// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = 'hello';}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





