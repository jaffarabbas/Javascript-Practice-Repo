/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            result = result.split('').reverse().join('');
        } else {
            result += s[i];
        }
    }

    return result;
};

console.log(finalString("poiinter"))