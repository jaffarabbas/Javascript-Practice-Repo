/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    arr.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        let num = 0;
        for (let j = 0; j <= i; j++) {
            num += nums[j]
        }
        arr.push(num)
    }
    return arr
};

console.log(runningSum([1,2,3,4]))