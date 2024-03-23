// Selection sort is the algorithm in which we select the minIndex and traverse the whole array to find the minimum element and fix the position of the element by swappping;

const selectionSort = (arr) => {
    const n = arr.length; 
    for(let i=0; i<n-1; i++) {
        let minIndex = i;
        for(let j=i+1; j<n; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }          
        }
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([6,3,-1,4,3,5,9,0]))