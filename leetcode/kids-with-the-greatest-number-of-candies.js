/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxVal = Math.max(...candies)
    let arr = []
    for(let ar of candies){
        if(ar + extraCandies >= maxVal){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }
    return arr;
};

console.log(kidsWithCandies([2,3,5,1,3],3))