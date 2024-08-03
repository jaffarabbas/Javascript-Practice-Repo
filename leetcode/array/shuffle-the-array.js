/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let firstPart = nums.slice(0, n);
    let secondPart = nums.slice(n);
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(firstPart[i])
        arr.push(secondPart[i])
    }
    return arr;
};

console.log(shuffle([2,5,1,3,4,7],3))