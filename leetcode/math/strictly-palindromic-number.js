/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let endBase = n - 2;
    for (let i = 2; i <= endBase; i++) {
        let a = n.toString(i);
        let left = 0,right = a.length - 1;
        while (left < right) {
            if (a[left] !== a[right]) {
                return false
            }
            left++; 
            right--; 
        }
    }
    return true;
};

console.log(isStrictlyPalindromic(9))