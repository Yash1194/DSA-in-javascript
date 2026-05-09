let prompt = require("prompt-sync")();
let num = prompt('Enter a number: ');

class Solution {
    printNumbers(n, count = 1) {

        if (count > n) {
            return;
        }

        console.log(count);

        this.printNumbers(n, ++count);
    }
}

let obj = new Solution();
obj.printNumbers(num);