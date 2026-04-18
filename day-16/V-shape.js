let prompt = require("prompt-sync")();

let nStr = prompt('Enter the number of rows for the V shape pattern: ');
let n = Number(nStr);   
function printVShapePattern(n) {
   
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 2* n-1; j++){
            if(i == j || j == (2 * n - i)){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }console.log();

    }
    
}

printVShapePattern(n);