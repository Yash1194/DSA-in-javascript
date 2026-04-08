// function isPrime(n) {
//     if (n <= 1) {
//         return "Not Prime";
//     }

//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) {
//             return "Not Prime";
//         }
//     }

//     return "Prime";
// }

// console.log(isPrime(7)); // 🔥 yeh add kar

// module.exports = { isPrime };

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

function isPrime(n) {
    if (n <= 1) {
        return "Not Prime";
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";
}

console.log(isPrime(n)); // 🔥 yeh add kar

module.exports = { isPrime };
