// Binary search is the algorithm in which we repeatedly divide the sorted array and if the mid element is greater than the target then we can select the first half of the array else we can select the right part of the array.

const binarySearch = (arr, k) => {
    const n = arr.length;
    let left = 0;
    let right = n-1;
    while(right >= left) {
        let mid = left + Math.floor((right - left)/2);
        if(arr[mid]===k) {
            return mid;
        }else if(arr[mid] > k) {
            right = mid-1;
        }else {
            left = mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([3,5,2,7,6,4,8,3], 8))