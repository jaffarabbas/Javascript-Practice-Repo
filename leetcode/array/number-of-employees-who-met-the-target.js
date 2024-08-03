/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for(let arr of hours){
        if(arr >= target){
            count++;
        }
    }
    return count;
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2))