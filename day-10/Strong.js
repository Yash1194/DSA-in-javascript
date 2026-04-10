function isStrongNumber(n) {
    prompt = require("prompt-sync")();
    n = parseInt(prompt("Enter a number: "));
    let orignal = n;
    let sum =0;

    while(n>0){
        let digit = n%10;

        let fact =1;

        for (let i =1 ; i<=digit ; i++){
            fact = fact*i;
        }
        sum += fact;
    n = Math.floor(n/10);
    } 
    if(sum === orignal){
        console.log("Yes Strong Number");
    }else{
        console.log("No Strong Number");
    }
}

isStrongNumber(); 