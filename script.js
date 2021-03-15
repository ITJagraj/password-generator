// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Special characters for the function created
var specialCharacters = "@!$#%*()"; 

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

//generate functions

var functionArray = [
    function getNumbers() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    function getLowerCases() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }, 
    function getUpperCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 95));
    },
    function getSpecialCharacters() {
        returnspecialCharacters(Math.floor(Math.random() * specialCharacters.lenght));
    }


];
//Starting loop 
if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;
}
if (lowerCases === true) {
    minimumLoweCases = functionArray[1];
    minimumCount++;
}
if (upperCases === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;
}
if (special === true) {
    minimumSpecialCharaters = functionArray[3];
    minimumCount++;
}
var randomPasswordGenerated = "";

//starting for loop
for(var i = 0; i < (parseInt(passwordLenght) - mimimumCount); i++) {
var randomNumberPicked = Math.floor(math.random() * 4);
}

randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLoweCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharaters;

return randomPasswordGenerated;
