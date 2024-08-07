/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let n = 0;
    for(let a of s){
        let temp = s.indexOf(a) - t.indexOf(a)
        if(temp < 0){
            temp = temp * -1
        }
        n += temp
    }
    return n;
};

console.log(findPermutationDifference("abc","bac"))