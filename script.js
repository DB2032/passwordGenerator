// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment code here

var generateBtn = document.querySelector("#generate");
let passwordLength = "0-128";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let symbol = "~!#$%^&*()_+{}[]";
let allChars = "";
function generatePassword() {
  passwordLength = window.prompt("enter PasswordLength between 8 and 128");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("passwordLength should be between 8 and 128 length please retry");
    return ("password not generated. retry");
  }

  let includeLowerCase = window.confirm("to include lowercase characters in password click ok. to exclude cancel.");
  let includeUpperCase = window.confirm("to include uppercase characters in password click ok. to exclude cancel.");
  let includeNumber = window.confirm("to include number characters in password click ok. to exclude cancel.");
  let includeSymbol = window.confirm("to include symbol characters in password click ok. to exclude cancel.");
  for (let i = 0; i < passwordLength; i++) {

    if (includeLowerCase && allChars.length <passwordLength) {
      var randomIndex = Math.floor(Math.random() * 26);
      allChars = allChars + lowercase[randomIndex];
      console.log("allChars = ", allChars);
    }


    if (includeUpperCase && allChars.length <passwordLength) {
      var randomIndex = Math.floor(Math.random() * 26);
      allChars = allChars + uppercase[randomIndex];
      console.log("allChars = ", allChars);

    }


    if (includeNumber && allChars.length <passwordLength) {
      var randomIndex = Math.floor(Math.random() * 10);
      allChars = allChars + number[randomIndex];
      console.log("allChars = ", allChars);
    }


    if (includeSymbol && allChars.length <passwordLength) {
      var randomIndex = Math.floor(Math.random() * 16);
      allChars = allChars + symbol[randomIndex];
      console.log("allChars = ", allChars);
    }
  }

  return allChars;
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function resetText(){
//  dodument.getElementById("password"). value = "Your Secure Password";
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
