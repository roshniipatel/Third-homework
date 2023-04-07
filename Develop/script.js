// Assignment Code

// Need the following variables:

  // prompt for password length --> stored in a variable
  // Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  // prompt --> Do they want uppercase letters?
  // prompt --> Do they want lowercase letters?
  // prompt --> Do they want numbers?
  // prompt --> Do they want special characters?
  // Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
  // With each of those prompts, you need an array of those character types
    // There needs to be at least one of each selected character type included in the password
    // Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
    // for loop:
      // for (var i = password.length - 1; i < passwordLength; i++)
    // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
      // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
      // IF pushing to a mega-array randomly generate a number to pull a character from the array
      // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
  // return the generated password


    // select length of the password
    // lowercase letters
    // uppercase letters
    // numbers
    // special characters

var passwordLength = 8;
var choice = []; // Arr = array
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{','}', '<', '>']; 


function askPrompts() {
  passwordLength = parseInt(prompt("How many characters would you like your password to have? (10-128 characters"));

  if (passwordLength <10 || passwordLength > 128) {
    alert("Password must be between 10-128 characters long. Please try again.");
    return false;
  }
  if (confirm("Would you like to use uppercase letters?")) {
    choice = choice.concat(uppercaseLetters);
  }
  if (confirm("Would you like to use lowercase letters?")) {
    choice = choice.concat(lowercaseLetters);
  }
  if (confirm("Would you like to use numbers?")) {
    choice = choice.concat(numbers);
  }
  if (confirm("Would you like to use special characters?")) {
    choice = choice.concat(specialCharacters);
  }
  return true;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var rightPrompts = askPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length)
    password = password + choice[randomCharacter]; 
  }
  return password;
}


// console.log(Math.floor(Math.random() * 26)) ;
