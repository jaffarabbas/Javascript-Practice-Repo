/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let num = 0;
    for(let a of nums){
        sum += a;
        let digits = 0;
        while (a > 0) {
            let digit = a % 10;
            digits += digit
            a = Math.floor(a / 10);
        }
        num += digits;
    }
    let result =  sum - num;
    return result < 0 ? result * -1 : result
};


console.log(differenceOfSum([1,15,6,3]))