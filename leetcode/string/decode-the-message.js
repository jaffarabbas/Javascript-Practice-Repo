/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const map = new Map();
    let alphabetIndex = 0;

    // Iterate over the key and map each unique character to the corresponding letter in the alphabet
    for (let char of key) {
        if (char !== ' ' && !map.has(char)) {
            map.set(char, String.fromCharCode(97 + alphabetIndex)); // 97 is the ASCII code for 'a'
            alphabetIndex++;
        }
    }

    // Decode the message
    let decodedMessage = '';
    for (let char of message) {
        if (char === ' ') {
            decodedMessage += ' ';
        } else {
            decodedMessage += map.get(char);
        }
    }

    return decodedMessage;
};