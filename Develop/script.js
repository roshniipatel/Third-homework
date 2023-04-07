// Assignment Code


    // select length of the password
    // lowercase letters
    // uppercase letters
    // numbers
    // special characters

var passwordLength = 8;
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{','}', '<', '>']; 


function askPrompts() {
  passwordLength = parseInt(prompt("How many characters would you like your password to have? (10-128 characters")); // chose number window for reference
  var choice = []; // array

  if (passwordLength <10 || passwordLength > 128 || isNaN(passwordLength)) {
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
  if(choice.length === 0) {
    alert("Must select one character type.");
    return;
  }

  return choice;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var choice = askPrompts();
  if(choice === undefined) {
    return "Please try again.";
  }
  var passwordArr = [];
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length)
  
    passwordArr.push(choice[randomCharacter])
  }
  return passwordArr.join("");
}


