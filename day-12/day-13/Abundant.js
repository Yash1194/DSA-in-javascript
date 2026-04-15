let prompt = require("prompt-sync")();

let nStr = prompt('Enter a number: ');
class Solution {
    is_abundant(nStr) {
        let n = Number(nStr)
        let sum = 0;
        for (let i = 1; i <= n/2 ; i++){
            if(n % i === 0){
                sum += i;
                
                
            }
            }
            if(sum > n){
                console.log("Yes It is an abundant number");
            }else{
                console.log("No It is not an abundant number");
            }

        }
            
    }
let solution = new Solution();
solution.is_abundant(nStr);
