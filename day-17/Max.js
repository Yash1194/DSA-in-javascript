let prompt = require("prompt-sync")();

let n = Number(prompt('Enter the number of elements in the array: '));
let arr = [];
for(let i=0; i<n; i++){
    arr[i] = Number(prompt("Enter element"));
}

function findGreatestElementAndIndex(arr) {
    
    let max = arr[0];
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }

   console.log(`The greatest element in the array is: ${max}`);
   console.log(`The index of the greatest element is: ${index}`);
}

findGreatestElementAndIndex(arr);