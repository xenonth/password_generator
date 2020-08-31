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
var passwordTypes = {
  alphabet: {
    lowerCase: ['a','b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k','l','m','n', 'o', 'p','q','r','s','t','u','v','w','x','y','z',],
    checkForUppercase: function () {
      var check = window.confirm("Do you wish to have capitals in your Password?");
      if (check === true) {
        //following checks if user needs uppercase will create an upperCase array if this is too complicated will convert it to upperCase followed by an array.
        for (let i = 0; i < this.lowerCase.length; i++) {
          upperCase = this.lowerCase[i].toUpperCase(); 
        } 
      }
    }
  },
  integer: ['0','1','2','3','4','5','6','7','8','9'],
  checkForInteger: function () {
    var checkInteger = window.confirm("Do you wish to have capitals in your Password?");
    if (checkInteger === true) {
      //place generation formula here 
    } 
  },
  specialCharacters: ['~','`','!','@', '#', '$', '%','^', '&', '*', '(', ')','-','_','+','=', '{', '[',']','}','|',":",';','"',"'",'<',',','>','.','?', '/'],
}
//Password Criteria This section will bring up a group of boxes to request the user what conditions they wish to use for their password.
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

//boolean request on conditions to randomly generate passwords
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

// The following block is catch in case user selects cancel on all confirm boxes asking the user to at least select one.
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}



// if conditions and prompt test




function generatePassword () {

}