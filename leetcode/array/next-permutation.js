/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // create a variable called i and set it to the length of the nums array - 2
    let i = nums.length - 2;
    // iterate through the nums array starting from the end
    // while i is greater than or equal to 0 and the element at the i-th index is greater than the element at the i+1-th index
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        // decrement i by 1
        i--;
    }
    // create a variable called j and set it to the length of the nums array - 1
    let j = nums.length - 1;
    // while j is greater than or equal to 0 and the element at the j-th index is less than or equal to the element at the i-th index
    while (j >= 0 && nums[j] <= nums[i]) {
        // decrement j by 1
        j--;
    }
    // swap the elements at the i-th and j-th index
    [nums[i], nums[j]] = [nums[j], nums[i]];
    // reverse the elements from the i+1-th index to the end of the array
    nums.splice(i + 1, nums.length - i, ...nums.slice(i + 1).reverse());
}