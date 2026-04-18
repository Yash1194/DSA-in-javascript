let prompt = require("prompt-sync")();

let nStr = prompt('Enter the number of rows for the mirrored right triangle: ');
let n = Number(nStr);
function printMirroredRightTriangle(n) {
    for(let i = 1; i <= n; i++){
        for(let j = 1;j <= (n-i)*2; j++){
            process.stdout.write(" ")
        }
    
    
        for(let j = 1; j <= i; j++){
            process.stdout.write("* ")
        }console.log();
    }
}

printMirroredRightTriangle(n);

