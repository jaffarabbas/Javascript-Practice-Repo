/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.splice(index[i], 0, nums[i]);
    }
    return arr
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))