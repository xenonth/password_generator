// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
      //Password Criteria This section will bring up a group of boxes to request the user what conditions they wish to use for their password. The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
// All credit to answered Dec 15 '19 at 16:43 Aaron Plocharczyk at https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working 
  var length = Number(prompt("How many characters would you like your password to be?"));

  while (isNaN(length) || length < 8 || length > 128) {
    length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  }
  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
    }
    //boolean request on conditions to randomly generate passwords following two blocks taken from https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working. 
/** The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
 * All credit to answered Dec 15 '19 at 16:43 Aaron Plocharczyk at https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working 
 */

// For each boolean value of true it will pass the following into the approved object.
  var passPhrase = '';
  var approved = [];
  //The following block checks for all character types and if true will concatenate the values into a string for easier use with rando. 
  if (lowers === true) {
      approved.push("qwertyuiopasdfghjklzxcvbnm");
    }
    if (uppers === true) {
      approved.push("QWERTYUIOPASDFGHJKLZXCVBNM");

    }
    if (numbers === true) {
      approved.push("1234567890");
      }
    if (symbols === true) {
      approved.push("!@#$%^&*(){}[]=<>/,.");
    } 
    
  // The following for loop is modded from code suggested by Instructor Trent during Office Hours
  //The code takes the approved Array, randomly selects one of the array elemetns, then selects a string value at random.
  //Using Possible characters for loop to generate a random character and add it to the passPhrase

  for (let i = 0; i < length; i++) {
    let randomCharString = rando(0, (approved.length-1)); 
    let charArray = approved[randomCharString]; 
    let singleCharacter = rando(charArray);
    passPhrase = passPhrase + singleCharacter;
    }
  return passPhrase;
}
