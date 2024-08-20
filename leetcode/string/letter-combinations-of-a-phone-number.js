/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let arr = []
    if(digits == ""){
        return arr;
    }
    const digitToChar = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', 
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const result = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const letters = digitToChar[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, path + letter);
        }
    }

    backtrack(0, "");
    return result;
};

console.log(letterCombinations("23"))