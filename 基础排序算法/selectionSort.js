const { 
  generateRandomArray, printArray, testSort, swap
} = require('../utils');

function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex, arr);
  }
}

function main() {
  let n = 1000;
  let arr = generateRandomArray(n, 0, n)
  // selectionSort(arr, n);
  // printArray(arr, n);
  testSort('Selection Sort', selectionSort, arr, n);
}

// main()


module.exports =  selectionSort;