function calculatePower(a, b) {
    prompt = require("prompt-sync")();
        a = Number(prompt("Enter the base number: "));
        b = Number(prompt("Enter the exponent: "));
    let result = 1;
    
    for(let i=1; i<=b; i++){
        result = result *a;
        
    }
    console.log(result);
}
calculatePower();