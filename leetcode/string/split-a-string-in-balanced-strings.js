/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0, count = 0;
    for(let a of s){
        if(balance == 0){
            count++;
        }
        if(a != "L"){
            balance++
        }else{
            balance--;
        }
    }
    return count
};

console.log(balancedStringSplit("RLRRLLRLRL"))