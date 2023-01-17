// Assignment code here


// Get references to the #generate element

// Step 1. I declare all the possible variables
//Selector for setting the password or writting
var textpassword = document.querySelector("#password");
//Selector for the longitude of the password
var passwordlength = document.querySelector(".passwordsize span");
//Selector for the Generator Button
var generateBtn = document.querySelector("#generate");
//Selector for the icon to copy the password 
var copy = document.querySelector(".copy");


// Step 2.Variables for Checkbox selector
var upper = document.querySelector("#upper");
var lower = document.querySelector("#lower");
var number = document.querySelector("#number");
var symbol = document.querySelector("#symbol");

//Define if leave this part or not 
var password = '';


//Step 3. Variables for the password conditions 
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=',-./:;<>?[\]`{|}~";

// Step 5.Add event listener to generate button


// Unifies all of the events.
addEventLinsteners();
function addEventLinsteners() {
  generateBtn.addEventListener("click", writePassword);

  //clipboard.addEventListener('click', copyPw);
}


//Step 7.Logic for generating the password.
// Write password to the #password input

// With this function we can iterate at least one time each array.
function writePassword(e) {
  password = ''; //Once more name this variable so I can restart so that it won't trouble the passwords. 
    if (upper.checked) {
        password += getUpperCase();
    }if (lower.checked) {
        password += getLowerCase();
    }if (number.checked) {
        password += getNumbersCase();
    }if (symbol.checked) {
        password += getSymbolsCase();
    }

    //With this command I verify if the data is number or string type.
    //console.log(typeof(passwordsize.textContent));

    // Condition that evaluates if there's a checked option.
    if (upper.checked || lower.checked || number.checked || symbol.checked) {
      fullpassword();
  }

  // Function that allows to enter a cicle depending of the previous condition.
    function fullpassword(){
      while (password.length < parseInt(passwordlength.textContent)) {
          var numberandom = getRandom();
          if (upper.checked && numberandom === 0) {
              password += getUpperCase();
          }if (lower.checked && numberandom === 1) {
              password += getLowerCase();
          }if (number.checked && numberandom === 2) {
              password += getNumbersCase();
          }if (symbol.checked && numberandom === 3) {
              password += getSymbolsCase();
          }
      }
      
      //Allos to show or set the password created either on the console or on the space. 
      //in the front. can be used.
      console.log(password);
      //textPw.innerHTML = passwordAll;
      textpassword.textContent = password; //Shows the password in the box. 
  }

  //if (upper.checked || lower.checked || number.checked || symbol.checked) {
    //completePw();
  //}
  //console.log(typeof(displaySize.textContent));

}



// Paso 4. Functions 

//Function to define the max size of the
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
function getRandom() {
  return Math.floor(Math.random() * 4);
}


//Step 6. I stablosh the functions of the conditions
// Button to generate the password depending on the conditions.

//To this function we give the size of the upper letters.
function getUpperCase() {
  return upperLetters[getRandomNumber(upperLetters.length)];
}

//This function carries the size for the lowercase letters.
function getLowerCase() {
  return lowerLetters[getRandomNumber(lowerLetters.length)];
}

//This function carries the size for the numbers.
function getNumbersCase() {
  return numbers[getRandomNumber(numbers.length)];
}

//This function carries the size for the symbols
function getSymbolsCase() {
  return symbols[getRandomNumber(symbols.length)];
}

//I stablish the function to show the selector of the size of the password. 
function showVal(value) {
  passwordlength.textContent = value;
}

//function showVal(value){
  //console.log(value)
  //passwordsize.textContent = value;
//}




//Testing this function proves that the random is working.
//function writePassword(e){
//console.log(getRandomNumber(5));
//}
//Testing this function proves that the uppercase letter in random is working.
//function writePassword(e){
//console.log(getUpperCase());
//}


//function writePassword(e){
//console.log(getLowerCase());
//}
//function writePassword(e){
//console.log(getNumbersCase());
//}
//function writePassword(e){
//console.log(getSymbolsCase());
//}




//Testing to see if it follows commands //Tester
//function writePassword(e) {
  //console.log(getSymbolsCase());
//}

