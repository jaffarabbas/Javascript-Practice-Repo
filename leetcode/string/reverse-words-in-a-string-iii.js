/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map(a => a.split('').reverse().join('')).join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))