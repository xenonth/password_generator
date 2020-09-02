// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// psuedocode test and trial.
//Password object, all valuees which can be randomly generated can be accessed from here.

//STILL NEED TO LINK TO A BUTTON IN THE HTML FILE!!
 
// End of borrowed code
// password generation variables 
var lowerCase =  'ab', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k','l','m','n', 'o', 'p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J','K','L','M','N', 'O', 'P','Q','R','S','T','U','V','W','X','Y','Z',];
var numerals = ['0','1','2','3','4','5','6','7','8','9'];
var special =  ['~','`','!','@', '#', '$', '%','^', '&', '*', '(', ')','-','_','+','=', '{', '[',']','}','|',":",';','"',"'",'<',',','>','.','?', '/'];

//Look into turning the following into an array or create a value seperately inside an object or an array return to the function and do something else.

// The following is modded from code suggested by Instructor Trent during Office Hours!
//Check for character type functions

function generatePassword () {
    //Password Criteria This section will bring up a group of boxes to request the user what conditions they wish to use for their password. The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
// All credit to answered Dec 15 '19 at 16:43 Aaron Plocharczyk at https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working 


//boolean request on conditions to randomly generate passwords following two blocks taken from https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working. 
/*
* /** The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
 * All credit to answered Dec 15 '19 at 16:43 Aaron Plocharczyk at https://stackoverflow.com/questions/59340866/random-password-generator-javascript-not-working 
 */
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

  var password = '';
  for (var characterNumber = 0; characterNumber <= length; characterNumber++) {
    // Password generation for all character types
    if ((uppers === true) && (lowers === true) && (numbers === true) && (symbols === true))  {
      var passwordCharArray = [
        lowerCase,
        upperCase,
        numerals,
        special,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random()* passwordCharArray[selector];
      password = password + passwordCharArray[selector][selected];
      console.log(password);
    }
    // Password generation for three character types
    else if ((uppers === false) && (lowers === true) && (numbers === true) && (symbols === true)) {
      var passwordCharArray = [
        lowerCase,
        numerals,
        special,
      ]
        let selector = Math.floor(Math.random()* passwordCharArray.length);
        let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
        password += passwordCharArray[selector][selected];
        console.log(password);
    } else if ((uppers === true) && (lowers === false) && (numbers === true) && (symbols === true)) {
      var passwordCharArray = [
        upperCase,
        numerals,
        special,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);

    } else if ((uppers === true) && (lowers === true) && (numbers === false) && (symbols === true)) {
      var passwordCharArray = [
        lowerCase,
        upperCase,
        special,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);
    } else if ((uppers === true) && (lowers === true) && (numbers === true) && (symbols === false)) {
      var passwordCharArray = [
        lowerCase,
        upperCase,
        numerals,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);
    }
    //Password Generation for two character types
    else if ((uppers === false) && (lowers === false) && (numbers === true) && (symbols === true)) {
      var passwordCharArray = [
        numerals,
        special,
      ]
        let selector = Math.floor(Math.random()* passwordCharArray.length);
        let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
        password += passwordCharArray[selector][selected];
        console.log(password);

    } else if ((uppers === true) && (lowers === false) && (numbers === false) && (symbols === true)) {
      var passwordCharArray = [
        upperCase,
        special,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);

    } else if ((uppers === true) && (lowers === true) && (numbers === false) && (symbols === false)) {
      var passwordCharArray = [
        lowerCase,
        upperCase,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);

    } else if ((uppers === false) && (lowers === true) && (numbers === true) && (symbols === false)) {
      var passwordCharArray = [
        lowerCase,
        numerals,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);
    }     
    else if ((uppers === true) && (lowers === false) && (numbers === true) && (symbols === false)) {
      var passwordCharArray = [
        upperCase,
        numerals,
      ]
        let selector = Math.floor(Math.random()* passwordCharArray.length);
        let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
        password += passwordCharArray[selector][selected];
        console.log(password);

    } else if ((uppers === false) && (lowers === true) && (numbers === false) && (symbols === true)) {
      var passwordCharArray = [
        lowerCase,
        special,
      ]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);

    }
    // Password Generation for a single Character Type
    else if ((uppers === true) && (lowers === false) && (numbers === false) && (symbols === false)) {
      var passwordCharArray = [upperCase]
        let selector = Math.floor(Math.random()* passwordCharArray.length);
        let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
        password += passwordCharArray[selector][selected];
        console.log(password);

    } else if ((uppers === false) && (lowers === true) && (numbers === false) && (symbols === false)) {
      var passwordCharArray = [numerals]
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);

    } else if ((uppers === false) && (lowers === false) && (numbers === true) && (symbols === false)) {
      var passwordCharArray = [numerals];
      let selector = Math.floor(Math.random()* passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);
    } else if ((uppers === false) && (lowers === false) && (numbers === false) && (symbols === true)) {
      var passwordCharArray = [special];
      let selector = Math.floor(Math.random() * passwordCharArray.length);
      let selected = Math.floor(Math.random() * passwordCharArray[selector].length);
      password += passwordCharArray[selector][selected];
      console.log(password);
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