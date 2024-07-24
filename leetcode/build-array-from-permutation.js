/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // create an empty array
    // iterate through the nums array
    // for each element in the nums array, push the value of the element in the nums array to the empty array
    // return the empty array
    return nums.map((num) => nums[num]);
};

console.log(buildArray([0,2,1,5,3,4])) // [0,1,2,4,5,3]