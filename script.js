// Assignment Code
var generateBtn = document.querySelector("#generate");




// code for linking the range slider and the num box relating to the length of the password
document.querySelector('.inputRange').addEventListener('input', updateValue);
document.getElementById('num1').addEventListener('input', updateValue);

function updateValue(e) {
  var sibling = e.target.previousElementSibling || e.target.nextElementSibling;
  sibling.value = e.target.value;
  var sibling1 = e.target.nextElementSibling || e.target.previousElementSibling;
  sibling1.value = e.target.value;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//random number function

function getRandomInteger(limitPlus) {
  var out = Math.floor(Math.random() * limitPlus);
  console.log(out);
  return out;
}



// generate the password

function generatePassword() {

  var passlength = document.getElementById("num1")
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var specialChars = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
  var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numbers = '0123456789'.split('');
  var finalArray = letters;
  var finalPass = '';
  var x = 0;




  if (document.getElementById("capLetters").checked === true) {
    finalArray = letters.concat(capLetters)
    console.log(passlength.value)



  }
  if (document.getElementById("passNum").checked === true) {
    finalArray = finalArray.concat(numbers)



  }
  if (document.getElementById("specChars").checked === true) {
    finalArray = finalArray.concat(specialChars)


  }
  while (x < (passlength.value)) {

    var finalPass = (finalPass + finalArray[getRandomInteger(finalArray.length)])
    x++


  }

  if (finalPass.length > 128) {
    alert("Please choose a password length of 128 characters or less")
    return
  }

  if (finalPass.length < 8) {
    alert("Please choose a password length of at least 8 characters")
    return
  }

  return finalPass
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








