/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let op of operations){
        if(op.includes("--")){
            x = x - 1;
        }else{
            x = x + 1;
        }
    }
    return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))