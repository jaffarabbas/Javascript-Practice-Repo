/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let brek = word.indexOf(ch)
    if(brek == -1){
        return word
    }
    let n = word.substring(0,brek+1).split('').reverse().join('') + word.substring(brek+1,word.length)
    return n
};

console.log(reversePrefix('abcdefd','d'))