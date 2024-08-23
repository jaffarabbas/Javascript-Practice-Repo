function countKDifference(nums, k) {
    const freq = new Map();
    let count = 0;

    for (const num of nums) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    }

    for (const num of freq.keys()) {
        if (freq.has(num + k)) {
            count += freq.get(num) * freq.get(num + k);
        }
        if (k !== 0 && freq.has(num - k)) {
            count += freq.get(num) * freq.get(num - k);
        }
    }
    return count;
}
