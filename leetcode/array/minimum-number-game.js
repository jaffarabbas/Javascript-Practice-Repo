/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = []
    while(nums.length > 0) {
        let amin = Math.min(...nums)
        nums.indexOf(amin) !== -1 && nums.splice(nums.indexOf(amin), 1);
        let abob = Math.min(...nums)
        nums.indexOf(abob) !== -1 && nums.splice(nums.indexOf(abob), 1);
        arr.push(abob)
        arr.push(amin)
    }
    return arr;
};

console.log(numberGame([5,4,2,3]))