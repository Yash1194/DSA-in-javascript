prompt = require("prompt-sync")();

let day = Number(prompt('Enter a day number (1-7): '));

console.log(printDayName(day));

function printDayName(day) {
    switch(day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

printDayName(day);
