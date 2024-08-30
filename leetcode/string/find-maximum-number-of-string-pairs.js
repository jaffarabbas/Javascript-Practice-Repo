/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const freqMap = new Map();

    // Build the frequency map
    for (let word of words) {
        const sortedWord = word.split('').sort().join('');
        freqMap.set(sortedWord, (freqMap.get(sortedWord) || 0) + 1);
    }

    let pairs = 0;

    // Calculate the number of pairs
    for (let count of freqMap.values()) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
};