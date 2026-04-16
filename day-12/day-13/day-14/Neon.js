let prompt = require("prompt-sync")();

let nStr = prompt('Enter a number: ');
class Solution {
    is_neon(nStr) {
        let n = Number(nStr);
        let square = n*n;
        let sum = 0;
        while(square > 0){
            sum += square%10;
            square = Math.floor(square/10);
            
        }
        if(sum == n){
                return "Yes , It is a Neon number"
            }else{
                return "No , It is not a Neon number"
            }

    }
}

let solution = new Solution();
console.log(solution.is_neon(nStr));
