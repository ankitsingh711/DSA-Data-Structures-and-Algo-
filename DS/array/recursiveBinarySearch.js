// Create a recursive function and compare the mid of the search with the key. And based on the result either return the index where the key is found or call the recursive function for the next search space.

const recursiveBinarySearch = (arr, left, right, k) => {
  if (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] == k) {
      return mid;
    }

    if (arr[mid] > k) {
      return recursiveBinarySearch(arr, left, mid - 1, k);
    }

    return recursiveBinarySearch(arr, mid + 1, right, k);
  }

  return -1;
};

const arr = [ 2, 3, 4, 10, 40 ];
const n = arr.length-1;
console.log(recursiveBinarySearch([8, 4, 3, 5, 6, 7, 2], 0, n-1, 6));
