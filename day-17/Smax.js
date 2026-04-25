let prompt = require("prompt-sync")();

let n = Number(prompt('Enter the number of elements in the array: '));
let arr = [];
for(let i=0; i<n; i++){
    arr[i] = Number(prompt("Enter element"));
}
function findSecondGreatestElement(arr) {
    let max = Math.max(arr[0],arr[1]);
    let sMax = Math.min(arr[0],arr[1]);

    for(let i=2; i<arr.length;i++){
        if(arr[i]>max){
            sMax = max;
            max = arr[i];
        }else if(arr[i]>sMax && arr[i]!=max){
            sMax = arr[i]
        }
    } console.log(`The second greatest element in the array is: ${sMax}`);

}

findSecondGreatestElement(arr);