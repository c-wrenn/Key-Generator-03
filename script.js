// Assignment code here
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase  =  lowerCase.toUpperCase()
var numbers ="0123456789"
var special = "!@#$%^&*()"
var candidates =''
var password = ''


function generatePassword() {
  var length = prompt("How long do you want your password? ")
  var parsedLength = parseInt(length)
  console.log(length)
  var lowercaseAnswer = confirm("Would you like to include lowercase characters?")
  var upperCaseAnswer = confirm("Would you like to include upper case characters?")
  var numbersAnswer = confirm("Would you like to include numbers?")
  var specialAnswer = confirm("Would you like to include special characters?")
  console.log(lowercaseAnswer)
  if (lowercaseAnswer === true) {
    candidates += lowerCase
  }
  if (upperCaseAnswer === true) {
    candidates += upperCase
  }
  if (numbersAnswer   === true) {
    candidates += numbers
  }
  if (specialAnswer   === true) { 
    candidates += special
  }

  
    for (var i = 0; i < parsedLength; i++) {
      var k= candidates.length
console.log(k)
      var newCharacter = candidates[parseInt(Math.random() * k)] //0.22225569 *26 = 4.236589 = 4
      password += newCharacter
    }
  
  return password
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
