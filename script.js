// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Special characters for the function created
var specialCharacters = @!$#%*()"; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Promt that box after clicking
function generatePassword() {
   var passwordLenght = prompt("Please enter the number of characters. It must be more than 8 and less than 128") 
   var numbers = confirm("Do you want numbers in the password?");
   var lowerCases = confirm("Do you want lowercases in your password?");
   var UpperCases = confirm("Do you want uppercases in your password?");
   var special = confirm("Do you want special charactiers in your password ?");
}
//minimun count for numbers, lowercase, upercase and specailcharacters
var minimumCOunt = 0;

//Empty minimums for numbers, liwerCase, upperCases & special Characters

var minimumNumbers = "";
var minimumLoweCases = "";
var minimumUpperCases = "";
var minimumSpecialCharaters = "";
