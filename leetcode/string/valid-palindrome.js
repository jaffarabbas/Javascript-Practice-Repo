/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let st = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0,right = st.length - 1;
    while (left < right) {
        if (st[left] != st[right]) {
            return false;
        }
        left++; 
        right--; 
    }
    return true;
};

console.log(isPalindrome("0P"))