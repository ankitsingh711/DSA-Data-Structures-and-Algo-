// Quick sort is the algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and paritions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5,3,0,7,4,6,2,1];
console.log(quickSort(arr));