prompt = require("prompt-sync")();

let ch = prompt('Enter a character: ');
function checkChar(ch) {
  ch = ch.toLowerCase();
  if(ch < 'a' || ch > 'z'){
    console.log("Invalid input. Please enter an alphabetic character.");
    
  }else if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
    console.log("Vowel");
    
  }else{
    console.log("Consonant");
    
  }

  }

  

checkChar(ch);
