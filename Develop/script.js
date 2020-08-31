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

// psuedocode test and trial.
//Password object, all valuees which can be randomly generated can be accessed from here.
 
  //Password Criteria This section will bring up a group of boxes to request the user what conditions they wish to use for their password. The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
// All credit to answered Dec 15 '19 at 16:43 Aaron Plocharczyk at https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working 
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) {
  length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
}

//boolean request on conditions to randomly generate passwords following two blocks taken from https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working. 
/*
* /** The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
 * All credit to answered Dec 15 '19 at 16:43 Aaron Plocharczyk at https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working 
 */
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
// End of borrowed code
// password generation variables 
var lowerCase =  ['a','b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k','l','m','n', 'o', 'p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J','K','L','M','N', 'O', 'P','Q','R','S','T','U','V','W','X','Y','Z',];
var numerals = ['0','1','2','3','4','5','6','7','8','9'];
var special =  ['~','`','!','@', '#', '$', '%','^', '&', '*', '(', ')','-','_','+','=', '{', '[',']','}','|',":",';','"',"'",'<',',','>','.','?', '/'];
var passwordCharArray = [
  lowerCase,
  upperCase,
  numerals,
  special,
]


//Look into turning the following into an array or create a value seperately inside an object or an array return to the function and do something else.

// The following is modded from code suggested by Instructor Trent during Office Hours!
function generatePassword () {
  var passPhrase = '';
  for (var characterNumber = 0; characterNumber <= length; characterNumber++) {
    if ((uppers === true) && (lowers === true) && (numbers === true) && (symbols === true))  {
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      passPhrase += passwordCharArray[selector][selected];
      console.log(passPhrase);
    }
  } 
}



/* The following is an idea suggested by Instructor Trent to follow through on
generatePassword2();
let passCharArray = [
  lowerCase,
  specialCharacters,
  integer,
]
// Instructor example about creating a password generator
let passwordLength = 4
for(let i = 0; i <= password.Length; i++) {
  let arrayNum = Math.floor(random())* 3;
  let charNum = Math.floor(random())* 3;
  console.log(` Array Choiuce ${arrayNum} char choice ${charNum}`);
  let passwordChar = passCharArray [arrayNum][charNum];
  password = password + passwordChar; *
 */