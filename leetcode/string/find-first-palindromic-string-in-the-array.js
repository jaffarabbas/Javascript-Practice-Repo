/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let a of words){
        let left = 0,right = a.length - 1,flag = true;
        while (left < right) {
            if (a[left] !== a[right]) {
                flag = false
            }
            left++; 
            right--; 
        }
        if(flag){
            return a;
        }
    }
    return "";
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))