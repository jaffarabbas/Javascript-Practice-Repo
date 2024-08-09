/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let total = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let n = s[i].charCodeAt(0) - s[i + 1].charCodeAt(0)
        if(n < 0){
            n = n * -1;
        }
        total += n;
    }
    return total;
};

console.log(scoreOfString("hello"))