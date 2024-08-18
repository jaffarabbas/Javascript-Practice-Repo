/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result = "";
        let prevChar = "";  // Keeps track of the previous character
    
        for (const char of s) {
            if (char >= 'a' && char <= 'z') {
                // Update the previous character
                prevChar = char;
                result += char;
            } else if (char >= '0' && char <= '9') {
                // Calculate the new character
                const shift = Number(char);
                const newChar = String.fromCharCode(prevChar.charCodeAt(0) + shift);
                result += newChar;
            }
        }
    
        return result;
    };