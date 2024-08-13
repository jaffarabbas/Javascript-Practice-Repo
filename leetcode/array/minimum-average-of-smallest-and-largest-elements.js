/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let avg = []
    while(nums.length > 0) {
        let max = Math.max(...nums)
        let min = Math.min(...nums)
        let cal = (max + min) / 2;
        avg.push(cal)
        if (nums.indexOf(max) !== -1) {
            nums.splice(nums.indexOf(max), 1);
        }
        if (nums.indexOf(min) !== -1) {
            nums.splice(nums.indexOf(min), 1);
        }
    }
    return Math.min(...avg)
};

console.log(minimumAverage([7,8,3,4,15,13,4,1]))