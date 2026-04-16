let prompt = require("prompt-sync")();

let nStr = prompt('Enter a number: ');
class Solution {
    prime_factors(nStr) {
        let n = Number(nStr);
        

        if( n<=1){
            console.log("No prime factors")
            return "";
            
        }
        let i = 2;
        while(n>1){
            if( n%i ===  0){
                console.log(i);
                n = n/i;
            }else{
                i++;
            }
            
        }
        return "";
    }
}

let solution = new Solution();
solution.prime_factors(nStr);
