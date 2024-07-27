/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;
    for (let num of nums) {
        let mod = num % 3;
        if (mod !== 0) {
            operations += Math.min(mod, 3 - mod);
        }
    }
    return operations;
};

console.log(minimumOperations([1,2,3,4]))