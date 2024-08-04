/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count  = 0;
    for(let a of stones){
        if(jewels.includes(a)){
            count++;
        }
    }
    return count;
};

console.log(numJewelsInStones("aA","aAAbbbb"))