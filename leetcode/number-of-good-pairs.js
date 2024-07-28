/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    let map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            count += map.get(num);
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    return count;
};

// console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))