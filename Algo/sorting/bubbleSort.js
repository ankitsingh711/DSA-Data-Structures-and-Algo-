// Bubble sort is the algorithm in which we iterates over the array and compare the adjacent elements and swap them in the ascending order until the whole array is sorted.

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([7, 4, 5, 2, 3, 2, 1, -1, 0]));
