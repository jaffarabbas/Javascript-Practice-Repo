/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let count = [];
    for(let i = 0;i<words.length;i++){
        if(words[i].includes(x)){
            count.push(i)
        }
    }
    return count;
};

console.log(findWordsContaining(["leet","code"],"e"))