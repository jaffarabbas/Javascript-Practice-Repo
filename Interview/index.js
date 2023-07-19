// Reverse a string
// Find the missing number in an array
// Check if a string is a palindrome
// Implement a stack or queue using arrays or linked lists
// Find the maximum and minimum element in an array
// Merge two sorted arrays
// Determine if a linked list has a cycle (cycle detection)
// Reverse a linked list
// Find the longest substring without repeating characters
// Implement binary search for a sorted array
// Given a binary tree, perform a level-order traversal (breadth-first search)
// Implement quicksort or mergesort algorithm for sorting arrays
// Find the common elements between two arrays
// Calculate the Fibonacci sequence using recursion or dynamic programming
// Determine if a number is prime or not
// Implement a basic calculator to perform arithmetic operations (+, -, *, /)
// Given a matrix, rotate it by 90 degrees in-place
// Determine if a string is an anagram of another string
// Find the intersection of two linked lists
// Implement depth-first search (DFS) for a graph

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Find the missing number in an array:

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return sum - actualSum;
}

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};
  for (let i = 0; i < str.length; i++) {
    if (charIndexMap[str[i]] !== undefined && charIndexMap[str[i]] >= start) {
      start = charIndexMap[str[i]] + 1;
    }
    charIndexMap[str[i]] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrderTraversal(root) {
  const result = [];
  if (!root) return result;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonElements = arr2.filter((item) => set1.has(item));
  return commonElements;
}

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonElements = arr2.filter((item) => set1.has(item));
  return commonElements;
}

// Using recursion
function fibonacciRecursion(n) {
  if (n <= 1) return n;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

// Using dynamic programming (Memoization)
function fibonacciDP(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciDP(n - 1, memo) + fibonacciDP(n - 2, memo);
  return memo[n];
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function basicCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
}

function rotateMatrix(matrix) {
  const n = matrix.length;
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  return ptrA;
}

class Graph {
  constructor() {
    this.graph = new Map();
  }

  addEdge(v, w) {
    if (!this.graph.has(v)) this.graph.set(v, []);
    this.graph.get(v).push(w);
  }

  dfsUtil(v, visited) {
    visited.add(v);
    console.log(v);

    const neighbors = this.graph.get(v);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsUtil(neighbor, visited);
      }
    }
  }

  dfs(startingVertex) {
    const visited = new Set();
    this.dfsUtil(startingVertex, visited);
  }
}

// Example usage:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

console.log("Depth-First Traversal starting from vertex 2:");
graph.dfs(2);
