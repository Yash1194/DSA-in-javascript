let prompt = require("prompt-sync")();

let nStr = prompt('Enter the number of rows for the right triangle: ');
let n = Number(nStr);

function printRightTriangleNumbers(n) {
    
        for(let i = 1 ; i <= n; i++ ){
            for (let j = 1; j <= i; j++){
                process.stdout.write(j +" ")
            }
         console.log();
        }
}

printRightTriangleNumbers(n);