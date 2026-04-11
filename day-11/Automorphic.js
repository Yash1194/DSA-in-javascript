function isAutomorphic(n) {
    let prompt = require("prompt-sync")();
    n = Number(prompt("Enter a number"))
    let square = n*n;
    while(n>0){
        if(n%10 !== square%10)
    {
        console.log("No");
        
    }
    n = Math.floor(n/10);
    square = Math.floor(square/10);

    }
    console.log("Yes")
}

isAutomorphic ();