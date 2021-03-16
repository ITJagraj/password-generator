// Assignment code here
var randomFunc = {
lower: getRandomLower,
upper: getRandomLower,
number: getRandomLower,
special: getRandomLower,
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Special characters for the function created
var special= "!@#$%^&*(){}[]=<>/,."; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    generatePassword();
});
var passwordLength, numbers, lowerCases, upperCases, special;
//Promt that box after clicking
function generatePassword() {
    passwordLength = prompt("Please enter the number of characters. It must be more than 8 and less than 128"); 
    numbers = confirm("Do you want numbers in the password?");
    lowerCases = confirm("Do you want lowercases in your password?");
    upperCases = confirm("Do you want uppercases in your password?");
    special = confirm("Do you want special charactiers in your password ?");
}
//minimun count for numbers, lowercase, upercase and specailcharacters
var minimumCount = 0;

//generate functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function geneerateRandomLower() {
    var special = "!@#$%^&*(){}[]=<>/,.";
    return special[Math.floor(Math.random() * special.length)];
}
    

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
  


  