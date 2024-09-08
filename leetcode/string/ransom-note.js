/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map1 = new Map();
    let map2 = new Map();
    for (const char of magazine) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }
    for (const char of ransomNote) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    for (const [char, count] of map2) {
        if (count > (map1.get(char) || 0)) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aa","ab"))