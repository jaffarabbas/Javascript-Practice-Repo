/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let ty =["type","color","name"]
    let ind = ty.indexOf(ruleKey)
    for(let a of items){
        if(a[ind] == ruleValue){
            count++
        }
    }
    return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],"type","phone"))