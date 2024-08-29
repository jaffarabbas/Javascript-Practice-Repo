/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let final = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == "("){
            count++
            if(count > final){
                final = count;
            }
        }else if(s[i] == ")"){
            count--;
        }
    }
    return final;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))