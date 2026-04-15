let prompt = require("prompt-sync")();

let nStr = prompt('Enter a number: ');
class Solution {
    is_harshad(nStr) {
        let num = Number(nStr);
        let sum = 0;
        for(let i = 0 ; i < nStr.length ; i++){
            sum += Number(nStr[i]);

        }if(num % sum === 0) {
            console.log("Harshad Number");
        }else{
            console.log("Not Harshad Number");
        }
    }
}

let solution = new Solution();
solution.is_harshad(nStr);

