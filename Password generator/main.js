const passwordBox = document.getElementById('input-value');
const length = 12;


const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers  = '0123456789'
const symbols = '!@#$%^&*()'

const allChars = lowerCase + upperCase + numbers + symbols
function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while( length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyElem(){
    passwordBox.select();
    document.execCommand("copy");
}