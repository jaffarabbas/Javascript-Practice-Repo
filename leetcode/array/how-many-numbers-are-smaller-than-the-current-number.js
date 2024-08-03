/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] > nums[j]){
                count++;
            }
        }
        ans.push(count)
    }
    return ans;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))