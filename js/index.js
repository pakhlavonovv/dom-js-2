// Task 1

// function nthSmallest(arr, n) {
//     let result = arr.sort((a, b)=> a - b);
//     result.forEach((element, index) => {
//         if(index + 1 === n){
//             console.log(element)
//         }
//     });
// }

// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10

// Task 2

// function mostFrequent(arr) {
//     let max = 0;
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let g = 0; g < arr.length; g++) {
//             if (arr[i] === arr[g]) {
//                 count++
//             } if (count > max) {
//                 max = count;
//                 num = arr[i]
//             }

//         }
//     }
//     console.log(num)
// }
// mostFrequent([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]); 

// Task 3

// function mostFrequentChar(str) {
//     let frequency = {};
//     let maxCount = 0;
//     let mostFrequent = '';

//     for (let char of str) {
//         if (frequency[char]) {
//             frequency[char]++;
//         } else {
//             frequency[char] = 1;
//         }

//         if (frequency[char] > maxCount) {
//             maxCount = frequency[char];
//             mostFrequent = char;
//         }
//     }

//     return mostFrequent;
// }

// // Test case
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"

// Task 4

// function firstMissingPositive(nums) {
//     let positives = []
//     nums.forEach(el => {
//         if(el >= 0){
//             positives.push(el)
//         }
//     })
//     let res1 = positives.sort((a, b)=> a - b)
//     console.log(res1[0])
//  }
 
//  // Test case
//  console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 1
//  console.log(firstMissingPositive([1, 2, 0])); // Output: 1

// Task 5

// function printCharsInLine(s = "") {
//     let res = s.split('').join(' ')
//     console.log(res)
// }

// // Test case
// console.log(printCharsInLine("hello")); // Output: "h e l l o"

// Task 6

// const longestCommonPrefix = function(strs) {
//     let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
//     for (let str of strs) {
//         while (str.slice(0, prefix.length) != prefix) {
//             prefix = prefix.slice(0, -1);
//         }
//     }
//     return prefix;
// };

// let res = longestCommonPrefix(["flower","flow","flight"]);

// console.log(res);

// Task 7

// function maxSumSubmatrix(matrix, k) {
//     let maxSum = -Infinity;
//     let maxRow = [];
  
//     for (let i = 0; i < matrix.length; i++) {
//       let rowSum = matrix[i].reduce((a, b) => a + b, 0);
//       if (rowSum > maxSum) {
//         maxSum = rowSum;
//         maxRow = matrix[i];
//       }
//     }
  
//     return maxRow;
//   }
  
//   // Test case
//   console.log(maxSumSubmatrix([
//       [10, 2, 3],
//       [4, 11, 6],
//       [7, 8, 9]
//   ])); // [7, 8, 9]
  

// Task 8

// function intersection(nums1, nums2) {
//     let result = nums1.filter(el => nums2.includes(el))
//     return result
// }

// console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

// Task 9

// function findPairs(arr, target) {
//     const pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return pairs;
// }

// console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]

// Task 10

// function letterFrequency(str) {
//     // Code here
// }

// console.log(letterFrequency("hello world"));
// // {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

// Task 10

// function letterFrequency(str) {
//     let frequency = {};

//     for (let char of str) {
//         if (char !== ' ') { // Bo'sh joylarni hisobga olmaymiz
//             if (frequency[char]) {
//                 frequency[char]++;
//             } else {
//                 frequency[char] = 1;
//             }
//         }
//     }

//     return frequency;
// }

// console.log(letterFrequency("hello world"));
// // {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
