/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let len = 0;
    for(let a of sentences){
        let str = a.split(" ").length
        if(len < str){
            len = str;
        }
    }
    return len
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))