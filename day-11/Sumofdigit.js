function sumOfDigits(n) {
    let prompt = require("prompt-sync")(); // 🔥 () lagana zaroori

    n = Number(prompt("Enter a number: "));
    let sum = 0;

    while (n > 0) {
        let digit = n % 10; // ❗ let bhi missing tha
        sum += digit;
        n = Math.floor(n / 10);
    }

    console.log(sum);
}

sumOfDigits();