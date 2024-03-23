// const maximumSubArray = (arr, k) => {
//     let maxSum = 0;
//     let windowSum = 0;
//     for(let i=0; i<k; i++) {
//         windowSum += arr[i];
//     }

//     maxSum = windowSum;

//     for(let i=k; i<arr.length; i++) {
//         windowSum = windowSum - arr[i-k] + arr[i];
//         maxSum = Math.max(maxSum, windowSum);
//     }

//     return maxSum;
// }

// const arr = [1,8,3,4,2,5,6];
// let k = 2;
// console.log(maximumSubArray(arr, k));

const lengthOfLongestSubstring = (str) => {
    const charIndexMap = {};
    let maxLength = 0;
    let start = 0;

    for(let end = 0; end < str.length; end++) {
        const currentChar = str[end];
        if(charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const str = "abcaaabcdaabdc";
console.log(lengthOfLongestSubstring(str))