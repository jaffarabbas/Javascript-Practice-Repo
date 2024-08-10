/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = s.split('').map((name, index) => [name, indices[index]]);
    arr = arr.sort((a,b) => b[1] - a[1])
    return arr.map(v => v[0]).reverse().join('')
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))