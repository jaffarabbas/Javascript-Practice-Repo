var groupAnagrams = function(strs) {
    let arr = new Map();
    strs.forEach(element => {
        var temp = element.split('').sort().join('');
        arr.has(temp) ? arr.get(temp).push(element) : arr.set(temp, [element]);
    });
    return Array.from(arr.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));