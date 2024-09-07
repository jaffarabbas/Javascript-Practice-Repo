/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = [];
    
    while (columnNumber > 0) {
        columnNumber -= 1;
        let char = String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt(0));
        result.push(char);
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result.reverse().join('');
};