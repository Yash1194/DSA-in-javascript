let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
class Solution {
    isPrime(n) {
        let count = 0;
          for(let i = 1; i<=n; i++){
            if(n%i == 0){
                count++
            }
          }if(count == 2){
                return "This is a prime number";

            }else{
                return "This is not a prime number";
            }
    }
}
let sol = new Solution();
console.log(sol.isPrime(n));