/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c] = nums;
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        if (a === b && b === c) {
            return "equilateral";
        }
        else if (a === b || b === c || a === c) {
            return "isosceles";
        }
        else {
            return "scalene";
        }
    } else {
        return "none";
    }
};