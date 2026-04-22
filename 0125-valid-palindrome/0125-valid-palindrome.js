/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean = "";

        for (let i = 0; i < s.length; i++) {
            let ch = s[i].toLowerCase();

            if (
                (ch >= 'a' && ch <= 'z') ||
                (ch >= '0' && ch <= '9')
            ) {
                clean += ch;
            }
        }

        let reverse = clean.split('').reverse().join('');

        return clean == reverse;
    
};