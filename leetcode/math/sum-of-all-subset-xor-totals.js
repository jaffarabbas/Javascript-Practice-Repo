/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let total = 0;
    let numberOfSubsets = Math.pow(2, nums.length);

    for (let i = 0; i < numberOfSubsets; i++) {
        let subset = [];
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                subset.push(nums[j]);
            }
        }
        total += subset.reduce((accumulator, currentValue) => accumulator ^ currentValue, 0)
    }

    return total;
};

console.log(subsetXORSum([5,1,6]))

