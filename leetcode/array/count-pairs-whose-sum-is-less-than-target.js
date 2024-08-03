/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(i < j && nums[i] + nums[j] < target){
                count++;
            } 
        }
    }
    return count;
};

console.log(countPairs([-1,1,2,3,1],2))