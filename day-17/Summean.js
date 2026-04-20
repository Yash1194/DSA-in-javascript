let prompt = require("prompt-sync")();
let n = Number(prompt('Enter the number of elements in the array: '));
let arr = [];
for(let i=0; i<n; i++){
    arr[i] = Number(prompt("Enter element"));
}
function calculateSumAndMean(arr, n) {

    let sum = 0;
    

    for(i = 0; i<n; i++){
        sum = sum + arr[i];
        
    }
    let mean = sum/n;
    return {sum,mean};
    
    
    
}

let result = calculateSumAndMean(arr, n);
console.log("Sum: " + result.sum);
console.log("Mean: " + result.mean);