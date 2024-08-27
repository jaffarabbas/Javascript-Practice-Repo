/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let n = num;
    let a = num.toString().split('');
    let count = 0;
    for(let i of a){
        if(n % i == 0){
            count++;
        }
    }
    return count;
};

console.log(countDigits(1248))