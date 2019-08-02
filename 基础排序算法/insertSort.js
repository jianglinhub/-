const { 
  generateRandomArray, testSort, swap, generateNearlyOrderedArray,
} = require('../utils');

const selectionSort = require('../selectionSort');

// function insertSort(arr, n) {
//   for (let i = 1; i < n; i++) {
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       swap(j, j - 1, arr)
//     }
//   }
// }

// 算法改进，交换改为赋值
function insertSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let e = arr[i];
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}

function main() {
  let n = 100000;
  let arr = generateNearlyOrderedArray(n, 10)
  // let arr = generateRandomArray(n, 0, n);
  let arr2 = [...arr];
  testSort('Insert Sort', insertSort, arr, n); // 3.512ms
  testSort('Selection Sort', selectionSort, arr2, n); // 5512.806ms
}

main()

module.exports =  insertSort;