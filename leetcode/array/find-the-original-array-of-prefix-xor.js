/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let n = pref.length;
    let original = new Array(n);
    original[0] = pref[0];
    for (let i = 1; i < n; i++) {
        original[i] = pref[i] ^ pref[i - 1];
    }
    
    return original;
};
console.log(findArray([5,2,0,3,1]))