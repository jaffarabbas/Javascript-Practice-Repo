/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let arr = names.map((name, index) => [name, heights[index]]);
    return arr.sort((a, b) => b[1] - a[1]).reverse().map((val) => val[0]).reverse();
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))