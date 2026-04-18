let prompt = require("prompt-sync")();

let nStr = prompt('Enter the number of rows for the inverted right triangle: ');
let n = Number(nStr);
function printInvertedRightTriangle(n) {
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n-i+1; j++ ){
            process.stdout.write("* ")
        }console.log();
    }
}

printInvertedRightTriangle(n);