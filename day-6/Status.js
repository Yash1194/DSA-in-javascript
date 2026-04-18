let prompt = require("prompt-sync")();

let ratingStr = prompt('Enter the movie rating (0.0 - 5.0): ');

class Solution {
    get_movie_status(ratingStr) {
        let rating = parseFloat(ratingStr);

        if (rating < 0 || rating > 5) {
            console.log("Invalid rating. Please enter between 0.0 and 5.0");
        }
        else if (rating <= 2.0) {
            console.log("Flop");
        }
        else if (rating <= 3.4) {
            console.log("Semi Hit");
        }
        else if (rating <= 4.5) {
            console.log("Hit");
        }
        else {
            console.log("Super Hit");
        }
    }
}

let obj = new Solution();
obj.get_movie_status(ratingStr);