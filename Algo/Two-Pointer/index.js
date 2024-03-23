// const pairSum = (arr, k) => {
//     let left = 0;
//     let right = arr.lenght-1;

//     while(left <= right) {
//         let sum = arr[left] + arr[right];
//         if(sum===k ){
//             return [left, right]
//         }else if(sum < k) {
//             left++;
//         }else {
//             right--
//         }
//     }
//     return [];
// }

const removeDuplicates = (arr) => {
    const n = arr.length;
    let i =0;
    for(let j=1; j<n; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}

const arr = [0,0,0,1,1,1]
console.log(removeDuplicates(arr))
