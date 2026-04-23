let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
class Solution {
    divisors(n) {
       let ans = []
       for(let i = 1; i<= n; i++){
        if(n%i == 0){
            ans.push(i);
        }
       } return ans;
    }
}
let sol = new Solution();
console.log(sol.divisors(n));