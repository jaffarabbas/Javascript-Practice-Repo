/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const onesCount = (s.match(/1/g) || []).length;
    const zerosCount = (s.match(/0/g) || []).length;
    if (onesCount === 0) {
        return "0";
    }
    const result = "1".repeat(onesCount - 1) + "0".repeat(zerosCount) + "1";
    return result;
};

console.log(maximumOddBinaryNumber("0101"))