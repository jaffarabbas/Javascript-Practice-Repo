var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    let i = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            while (j < needle.length && i + j < haystack.length && haystack[i + j] === needle[j]) {
                j++;
            }
            if (j === needle.length) {
                return i;
            }
        }
        i++;
    }
    return -1;
};