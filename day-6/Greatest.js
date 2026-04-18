prompt = require("prompt-sync")();

let a = Number(prompt('Enter first number: '));
let b = Number(prompt('Enter second number: '));
let c = Number(prompt('Enter third number: '));


function findGreatest(a, b, c) {
    if(a>=b && a>=c){
        console.log("The Greatest number is: " + a);
    }else if(b>=a && b>=c){
        console.log("The Greatest number is: " + b);
    }else{
        console.log("The Greatest number is: " + c);
    }
    
}

findGreatest(a, b, c);