/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let total = 0;
    for (let i = 0; i < words.length; i++) {
        let flag = false;
        for(let a of words[i]){
            if(!allowed.includes(a)){
                flag = true;
            }
        }
        if(!flag){
            total++;
        }
    }
    return total;
};

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))