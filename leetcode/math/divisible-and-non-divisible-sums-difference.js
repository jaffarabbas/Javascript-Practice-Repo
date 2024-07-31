/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let arr1 = [],arr2=[],num1 = 0 , num2 = 0;
    for (let i = 1; i <= n; i++) {
        if(i%m == 0){
            arr2.push(i)
        }else{
            arr1.push(i)
        }
    }
    num1 = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    num2 = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return num1 - num2;
};

console.log(differenceOfSums(10,3))