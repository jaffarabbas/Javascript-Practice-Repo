function longestPalin(S) {
  if (!S || S.length === 0) return "";

  let start = 0; // Starting index of the longest palindromic substring found so far
  let maxLength = 1; // Length of the longest palindromic substring found so far

  // Helper function to expand around the center to find palindromic substrings
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < S.length && S[left] === S[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < S.length; i++) {
    // Consider both odd and even length palindromes
    expandAroundCenter(i, i); // Odd length
    expandAroundCenter(i, i + 1); // Even length
  }

  return S.substring(start, start + maxLength);
}
