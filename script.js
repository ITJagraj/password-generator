// Assignment code here
var upperCases = "ABCD";
var lowerCases = "abcd";
var numbers = "0123456789";
var special = "!@#$%^&*(){}[]=<>/,.";
 
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
   var passwordLength = prompt("Please enter the number of characters. It must be more than 8 and less than 128"); 
   var numbers = confirm("Do you want numbers in the password?");
   var lowerCases = confirm("Do you want lowercases in your password?");
   var UpperCases = confirm("Do you want uppercases in your password?");
   var special = confirm("Do you want special charactiers in your password ?");

//minimun count for numbers, lowercase, upercase and specailcharacters
var minimumCOunt = 0;

//Empty minimums for numbers, liwerCase, upperCases & special Characters

var minimumNumbers = "";
var minimumLoweCases = "";
var minimumUpperCases = "";
var minimumSpecialCharaters = "";

//generate functions

var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

//Starting loop 
if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}