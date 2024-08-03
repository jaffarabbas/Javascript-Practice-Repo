/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // create a variable called i and set it to the length of the digits array - 1
    let i = digits.length - 1;
    // iterate through the digits array starting from the end
    // while i is greater than or equal to 0 and the element at the i-th index is equal to 9
    while (i >= 0 && digits[i] === 9) {
        // set the element at the i-th index to 0
        digits[i] = 0;
        // decrement i by 1
        i--;
    }
    // if i is less than 0
    if (i < 0) {
        // insert 1 at the beginning of the digits array
        digits.unshift(1);
    } else {
        // increment the element at the i-th index by 1
        digits[i]++;
    }
    // return the digits array
    return digits;
};