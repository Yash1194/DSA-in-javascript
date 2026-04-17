let prompt = require("prompt-sync")();

let nStr = prompt('Enter a number: ');
class Solution {
    is_armstrong(nStr) {
        let n = Number(nStr);
        let temp = n;
        let count = 0;

        while(temp > 0){
            count++;
            temp = Math.floor(temp/10);

        }
        temp = n ;
        let sum = 0;
        while(temp > 0){
            let digit = temp%10;
            sum += digit ** count;
            temp = Math.floor(temp/10);
        }
        if(sum === n){
            console.log("Armstrong Number");
            
        }else{
            console.log("Not Armstrong Number");
            
        }
    }
}
let solution = new Solution();
solution.is_armstrong(nStr);
