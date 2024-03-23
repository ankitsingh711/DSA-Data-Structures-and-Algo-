// Insetion sort is the algorithm in which we compare the two elements and swap them in correct order if its in unsorted order else continue.

const insertionSort = (arr) => {
    const n = arr.length;
    for(let i=1; i<n; i++) {
        const key = arr[i];
        let j = i - 1;
        while( j >= 0 && arr[j] > key ) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

const arr = [10,9,-1,8,1,4,2]
console.log(insertionSort(arr));