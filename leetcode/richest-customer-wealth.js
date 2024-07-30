/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let count = []
    for(let arr of accounts){
        count.push(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    }
    return Math.max(...count)
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))