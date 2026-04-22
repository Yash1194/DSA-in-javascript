let prompt = require("prompt-sync")();

let n1 = Number(prompt("Enter the first number: "));
let n2 = Number(prompt("Enter the second number: "));

class Solution {
    GCD(n1, n2) {
        let gcd = 0;

        while (n1 > 0 && n2 > 0) {
            if (n1 > n2) {
                n1 = n1 % n2;
            } else {
                n2 = n2 % n1;
            }

            if (n1 == 0) {
                gcd = n2;
            } else {
                gcd = n1;
            }
        }

        return gcd;
    }
}

let obj = new Solution();
console.log(obj.GCD(n1, n2));