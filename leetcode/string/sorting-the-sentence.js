/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(' ')
    let map = new Map()
    for(let a of arr){
        const nonNumericPart = a.match(/\D+/g); 
        const numericPart = a.match(/\d+/g); 
        if(!map.has(numericPart)){
            map.set(numericPart.join(''),nonNumericPart.join(''))
        }
    }
    const entries = Array.from(map.entries());
    entries.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });
    return entries.map(a => a[1]).join(' ')
}
console.log(sortSentence("is2 sentence4 This1 a3"))